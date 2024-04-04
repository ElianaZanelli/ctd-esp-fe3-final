import { Box, Typography } from '@mui/material'
import { PaymentDataSchema, PaymentDataFormValues } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

export interface PaymentDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: React.Dispatch<React.SetStateAction<PaymentDataFormValues>>
  onSubmit: (data: any) => void
  formData: any
}

export const PaymentData: React.FC<PaymentDataProps> = ({
  activeStep,
  handleNext,
  handleBack,
  setFormData,
  onSubmit: onSubmitForm,
  formData
}: PaymentDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues
  } = useForm({
    defaultValues: {
      ...formData
    },
    resolver: yupResolver(PaymentDataSchema)
  })

  const onSubmitLocal: SubmitHandler<PaymentDataFormValues> = ({ nombretarjeta, numerotarjeta, fechadeexpiracion, codigodeseguridad }) => {
    setFormData({ nombretarjeta, numerotarjeta, fechadeexpiracion, codigodeseguridad })
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitLocal)}>
        <Input
          required
          label="Número de tarjeta"
          control={control}
          name="numerotarjeta"
          error={Boolean(errors.numerotarjeta)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="numerotarjeta" errors={errors} />
        </Typography>
        <Input
          required
          label="Nombre como aparece en la tarjeta"
          control={control}
          name="nombretarjeta"
          error={Boolean(errors.nombretarjeta)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="nombretarjeta" errors={errors} />
        </Typography>
        <Input
          required
          label="Fecha de expiración"
          control={control}
          name="fechadeexpiracion"
          error={Boolean(errors.fechadeexpiracion)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="fechadeexpiracion" errors={errors} />
        </Typography>
        <Input
          required
          label="Código de seguridad"
          control={control}
          name="codigodeseguridad"
          error={Boolean(errors.codigodeseguridad)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="codigodeseguridad" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={() => { onSubmitForm(getValues()) }} handleBack={handleBack} />
      </form>
    </Box>
  )
}
