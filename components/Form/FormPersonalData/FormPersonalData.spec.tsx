
import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { FormPersonalData, FormPersonalDataProps } from '../../../components/Form/FormPersonalData/FormPersonalData'
import { Wrapper } from '../../../test/Wrapper'
import userEvent from '@testing-library/user-event'

describe('FormPersonalData.spec.tsx', () => {
  const renderComponent = (): void => {
    render(
      <Wrapper>
        <FormPersonalData
          activeStep={0}
          handleNext={() => {}}
          setFormData={(data: any): void => {
            throw new Error('Function not implemented.')
          }}
          formData={null} // Assuming formData should be null initially
        />
      </Wrapper>
    )
  }

  describe('when rendering default', () => {
    it('should render personal name, lastname, and email inputs', () => {
      renderComponent()

      const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
      const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
      const emailInput = screen.getByRole('textbox', { name: /Email */i })

      expect(nameInput).toBeInTheDocument()
      expect(lastNameInput).toBeInTheDocument()
      expect(emailInput).toBeInTheDocument()
    })
  })

  describe('when entering wrong values', () => {
    it("should render inputs error when doesn't fill form", async () => {
      renderComponent()

      const nextButton = screen.getByText(/siguiente/i)
      expect(nextButton).toBeInTheDocument()

      await act(async () => {
        userEvent.click(nextButton)
      })

      await waitFor(() => {
        expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.getByText('El apellido es requerido')).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.getByText('El email es requerido')).toBeInTheDocument()
      })
    })
  })

  describe('when entering correct values', () => {
    it('should not render inputs error', async () => {
      renderComponent()

      const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
      const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
      const emailInput = screen.getByRole('textbox', { name: /Email */i })
      const nextButton = screen.getByText(/siguiente/i)

      await act(async () => {
        userEvent.type(nameInput, 'Eliana')
        userEvent.type(lastNameInput, 'Zanelli')
        userEvent.type(emailInput, 'eliana@gmail.com')
        userEvent.click(nextButton)
      })

      await waitFor(() => {
        expect(screen.queryByText('El nombre es requerido')).not.toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.queryByText('El apellido es requerido')).not.toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.queryByText('El nombre es requerido')).not.toBeInTheDocument()
      })
    })
  })
})
