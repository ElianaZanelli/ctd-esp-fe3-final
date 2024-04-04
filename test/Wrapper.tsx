import { useForm, FormProvider } from 'react-hook-form'
import { type ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }): JSX.Element => {

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      nombre: ''
    }
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
