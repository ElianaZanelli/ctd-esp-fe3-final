import * as yup from 'yup'

export interface CheckoutDataFormValues {
  personales: PersonalDataFormValues
  direccion: DirectionDataFormValues
  pago: PaymentDataFormValues
}

export interface PersonalDataFormValues {
  nombre: string
  apellido: string
  email: string
}

export interface DirectionDataFormValues {
  direccion: string
  dpo: string
  ciudad: string
  provincia: string
  codigopostal: string
}

export interface PaymentDataFormValues {
  numerotarjeta: string
  nombretarjeta: string
  fechadeexpiracion: string
  codigodeseguridad: string
}

export const PersonalDataSchema = yup.object({
  nombre: yup
    .string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]+$/, 'El nombre no puede contener números'),

  apellido: yup
    .string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]+$/, 'El apellido no puede contener números'),

  email: yup
    .string()
    .required('El email es requerido')
    .email('Ingrese un formato de email válido')
})

export const DirectionDataSchema = yup.object({
  direccion: yup.string().required('La dirección es obligatoria'),

  ciudad: yup.string().required('La ciudad es obligatoria'),

  provincia: yup.string().required('La provincia es obligatoria'),

  codigopostal: yup
    .string()
    .required('El código postal es requerido')
    .matches(/^([0-9])*$/, 'El código postal debe contener solo números')
})

export const PaymentDataSchema = yup.object({
  numerotarjeta: yup
    .string()
    .required('El número de la tarjeta es obligatorio')
    .min(16, 'Ingrese los 16 dígitos de la tarjeta'),

  nombretarjeta: yup
    .string()
    .required('El nombre de la tarjeta es obligatorio')
    .matches(
      /^[a-zA-Z\s]+$/,
      'El nombre de tarjeta no puede contener números'
    ),

  fechadeexpiracion: yup
    .string()
    .required('La fecha de expiración es obligatoria')
    .matches(/^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/, 'La fecha debe ser formato mm/aa')
    .min(4, 'Ingrese 4 números')
    .max(4, 'Ingrese 4 números'),

  codigodeseguridad: yup
    .string()
    .required('El código de seguridad es requerido')
    .min(3, 'Ingrese 3 números')
    .max(3, 'Ingrese 3 números')
})
