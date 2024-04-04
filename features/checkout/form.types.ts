export interface FormData {
  nombre: string
  apellido: string
  email: string

  direccion: string
  dpto: string | null | undefined
  ciudad: string
  provincia: string
  codigopostal: string

  numerotarjeta: string
  nombretarjeta: string
  codigodeseguridad: string
  fechadeexpiracion: string
}
