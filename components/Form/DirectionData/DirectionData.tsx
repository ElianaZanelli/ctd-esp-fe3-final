import { Box, Typography } from '@mui/material'
import { DirectionDataSchema } from '../schema.form'
import { StepperButtons } from '../StepperButtons'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import Input from '../Input'
import { ErrorMessage } from '@hookform/error-message'

interface FormDirectionData {
  direccion: string
  provincia: string
  ciudad: string
  codigopostal: string
}

export interface DirectionDataProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  setFormData: React.Dispatch<React.SetStateAction<FormDirectionData>>
  formData: FormDirectionData | undefined
}

export const DirectionData: React.FC<DirectionDataProps> = ({
  activeStep,
  handleNext,
  handleBack,
  formData,
  setFormData
}: DirectionDataProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FormDirectionData>({
    defaultValues: formData,
    resolver: yupResolver(DirectionDataSchema)
  })

  const onSubmit: SubmitHandler<FormDirectionData> = ({ direccion, ciudad, provincia, codigopostal }) => {
    setFormData({ direccion, ciudad, provincia, codigopostal })
    handleNext()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required label="Dirección" control={control} name="direccion" error={Boolean(errors.direccion)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="direccion" errors={errors} />
        </Typography>
        <Input label="Dpto, piso, etc. (opcional)" control={control} name="dpto" />{' '}
        <Input required label="Ciudad" control={control} name="ciudad" error={Boolean(errors.ciudad)} />
        <Typography variant="caption" color="error">
          <ErrorMessage name="ciudad" errors={errors} />
        </Typography>
        <Input
          required
          label="Provincia"
          control={control}
          name="provincia"
          error={Boolean(errors.provincia)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="provincia" errors={errors} />
        </Typography>
        <Input
          required
          label="Código postal"
          control={control}
          name="codigopostal"
          error={Boolean(errors.codigopostal)}
        />
        <Typography variant="caption" color="error">
          <ErrorMessage name="codigopostal" errors={errors} />
        </Typography>
        <StepperButtons activeStep={activeStep} handleNext={handleSubmit(onSubmit)} handleBack={handleBack} />
      </form>
    </Box>
  )
}
