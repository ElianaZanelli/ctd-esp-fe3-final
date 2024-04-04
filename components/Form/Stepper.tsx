import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { FormPersonalData } from '../../components/Form/FormPersonalData/FormPersonalData'
import { DirectionData } from '../../components/Form/DirectionData/DirectionData'
import { PaymentData } from '../../components/Form/PaymentData/PaymentData'
import { Alert, Snackbar } from '@mui/material'
import router from 'next/router'
import { FormData } from '../../features/checkout/form.types'
import { CheckoutDataFormValues } from './schema.form'

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago']

interface StepperProps {
  title: string
  image: string
  price: number
}

interface ResponseData {
  error: boolean
  message: string
}

export default function HorizontalLinearStepper ({ title, image, price }: StepperProps): JSX.Element {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [error, setError] = React.useState<string>('')
  const [formData, setFormData] = React.useState<CheckoutDataFormValues>({
    personales: {
      nombre: '',
      apellido: '',
      email: ''
    },
    direccion: {
      direccion: '',
      dpo: '',
      ciudad: '',
      provincia: '',
      codigopostal: ''
    },
    pago: {
      numerotarjeta: '',
      nombretarjeta: '',
      codigodeseguridad: '',
      fechadeexpiracion: ''
    }
  })

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    // Envío de los datos del formulario
    const sentFormData = {
      customer: {
        name: formData.personales.nombre,
        lastname: formData.personales.apellido,
        email: formData.personales.email,
        address: {
          address1: formData.direccion.direccion,
          address2: formData.direccion.dpo,
          city: formData.direccion.ciudad,
          state: formData.direccion.provincia,
          zipCode: formData.direccion.codigopostal
        }
      },
      card: {
        number: data.numerotarjeta,
        cvc: data.codigodeseguridad,
        expDate: data.fechadeexpiracion,
        nameOnCard: data.nombretarjeta
      },
      order: {
        name: title,
        image,
        price
      }
    }

    // Llamada a la API
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sentFormData)
    })
      .then(async (response) => await response.json())
      .then((data: ResponseData) => {
        if (data.error) {
          setError(data.message.toString())
        } else {
          localStorage.setItem('purchase-data', JSON.stringify(data))
          router.push({
            pathname: '/confirmacion-compra'
          }).catch((error) => {
            console.error(error)
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: '30px' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
        Paso {activeStep + 1}: {steps[activeStep]}{' '}
      </Typography>
      {activeStep === 0 && (
        <FormPersonalData
          formData={formData.personales}
          setFormData={(data) =>
            setFormData((prevState) => ({
              ...prevState,
              personales: { ...prevState.personales, ...data }
            }))
          }
          activeStep={activeStep}
          handleNext={handleNext}
        />
      )}

      {activeStep === 1 && (
        <DirectionData
          formData={formData.direccion}
          setFormData={(data) => setFormData({ ...formData, direccion: { ...formData.direccion, ...data } })}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}

      {activeStep === 2 && (
        <PaymentData
          formData={formData.pago}
          setFormData={(data) => setFormData({ ...formData, pago:{...formData.pago, ...data} })}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          onSubmit={onSubmit}
        />
      )}

      {error !== '' && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
    </Box>
  )
}