import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { DirectionData } from '../DirectionData/DirectionData'
import { Wrapper } from '../../../test/Wrapper'
import userEvent from '@testing-library/user-event'

describe('DirectionData.spec.tsx', () => {
  const renderComponent = () => {
    act(() => {
      render(
        <Wrapper>
          <DirectionData
            handleNext={() => { }}
            activeStep={1}
            handleBack={() => { }}
            formData={undefined}
            setFormData={function (data: any): void {
              throw new Error('Function not implemented.')
            }}
          />
        </Wrapper>
      )
    }
    )
  }

  describe('when rendering default', () => {
    it('should render direction inputs', () => {
      renderComponent()

      const directionInput = screen.getByRole('textbox', { name: /Dirección */i })
      const direction2Input = screen.getByRole('textbox', { name: 'Dpto, piso, etc. (opcional)' })
      const cityInput = screen.getByRole('textbox', { name: /Ciudad */i })
      const provinceInput = screen.getByRole('textbox', { name: /Provincia */i })
      const zipCodeInput = screen.getByRole('textbox', { name: /Código postal */i })

      expect(directionInput).toBeInTheDocument()
      expect(direction2Input).toBeInTheDocument()
      expect(cityInput).toBeInTheDocument()
      expect(provinceInput).toBeInTheDocument()
      expect(zipCodeInput).toBeInTheDocument()
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
        expect(screen.getByText('La dirección es requerida')).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.getByText('La ciudad es requerida')).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.getByText('La Provincia es requerida')).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(screen.getByText('El código postal es requerido')).toBeInTheDocument()
      })
    })
  })

  describe('when entering correct values', () => {
    it('should not render inputs error', async () => {
      renderComponent()

      const directionInput = screen.getByRole('textbox', { name: /Dirección */i })
      const direction2Input = screen.getByRole('textbox', { name: 'Dpto, piso, etc. (opcional)' })
      const cityInput = screen.getByRole('textbox', { name: /Ciudad */i })
      const provinceInput = screen.getByRole('textbox', { name: /Provincia */i })
      const zipCodeInput = screen.getByRole('textbox', { name: /Código postal */i })
      const nextButton = screen.getByText(/siguiente/i)

      act(() => {
        userEvent.type(directionInput, 'calle 50')
        userEvent.type(direction2Input, 'piso B')
        userEvent.type(cityInput, 'La Plata')
        userEvent.type(provinceInput, 'Buenos Aires')
        userEvent.type(zipCodeInput, '1900')
        userEvent.click(nextButton)
      })

      expect(screen.queryByText('La dirección es requerida')).not.toBeInTheDocument()
      expect(screen.queryByText('La ciudad es requerida')).not.toBeInTheDocument()
      expect(screen.queryByText('La provincia es requerida')).not.toBeInTheDocument()
      expect(screen.queryByText('El código postal es requerido')).not.toBeInTheDocument()
    })
  })
})

// npm run test DirectionData.spec.tsx
