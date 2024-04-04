/*
* Usar la extensión better comments
! se modifica la importación dh- marver, por  este error  Unable to resolve path to module dado en eslint
*/

import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { PaymentData } from './PaymentData'
import { Wrapper } from '../../../test/Wrapper'
import userEvent from '@testing-library/user-event'

describe('PaymentData.spec.tsx', () => {
  const renderComponent = () => {
    render(
      <Wrapper>
        <PaymentData
          handleNext={() => {}}
          setFormData={()=>{}}
          activeStep={1}
          handleBack={() => {}}
          onSubmit={() => {}}
          formData={undefined}
        />
      </Wrapper>
    )
  }

  describe('when rendering default', () => {
    it('should render the inputs', () => {
      renderComponent()

      const cardNumInput = screen.getByRole('textbox', { name: /Número de tarjeta */i })
      const cardNameInput = screen.getByRole('textbox', { name: /Nombre como aparece en la tarjeta/i })
      const expirationDateInput = screen.getByRole('textbox', { name: /Fecha de expiración */i })
      const cvvInput = screen.getByLabelText(/Código de seguridad */i)

      expect(cardNumInput).toBeInTheDocument()
      expect(cardNameInput).toBeInTheDocument()
      expect(expirationDateInput).toBeInTheDocument()
      expect(cvvInput).toBeInTheDocument()
    })
  })

  describe('when entering wrong values', () => {
    it("should render inputs error when doesn't fill form", async () => {
      renderComponent()

      const nextButton = screen.getByText(/siguiente/i)
      expect(nextButton).toBeInTheDocument()

      act(() => {
        userEvent.click(nextButton)
      })

      await waitFor(() => {
        expect(screen.getByText('El número de la tarjeta es requerido')).toBeInTheDocument()
        expect(screen.getByText('El nombre de la tarjeta es requerido')).toBeInTheDocument()
        expect(screen.getByText('La fecha de expiración es requerida')).toBeInTheDocument()
        expect(screen.getByText('El código de seguridad es requerido')).toBeInTheDocument()
      })
    })
  })

  describe('when entering correct values', () => {
    it('should not render inputs error', async () => {
      renderComponent()

      const cardNumInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Número de tarjeta */i })
      const cardNameInput = screen.getByRole<HTMLInputElement>('textbox', {
        name: /Nombre como aparece en la tarjeta/i
      })
      const expirationDateInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Fecha de expiración */i })
      const cvvInput = screen.getByLabelText(/Código de seguridad */i)
      const nextButton = screen.getByText(/siguiente/i)

      act(() => {
        userEvent.type(cardNumInput, '42424242 4242 4242')
        userEvent.type(cardNameInput, 'Eliana Zanelli')
        userEvent.type(expirationDateInput, '1026')
        userEvent.type(cvvInput, '451')
        userEvent.click(nextButton)
      })

      expect(screen.queryByText('El número de la tarjeta es requerido')).not.toBeInTheDocument()
      expect(screen.queryByText('El nombre de la tarjeta es requerido')).not.toBeInTheDocument()
      expect(screen.queryByText('La fecha de expiración es requerida')).not.toBeInTheDocument()
      expect(screen.queryByText('El código de seguridad es requerido')).not.toBeInTheDocument()
    })
  })

  describe('visibility toggle', () => {
    it('should change password input type', async () => {
      renderComponent()

      const cvvInput = screen.getByLabelText(/Código de seguridad */i)
      const visibilityButton = screen.getByLabelText('toggle password visibility')

      expect(cvvInput).toHaveAttribute('type', 'password')
      await userEvent.click(visibilityButton)

      expect(cvvInput).toHaveAttribute('type', 'text')
    })
  })
})



// npm run test PaymentData.spec.tsx
