import React from 'react'
import PurchaseConfirmation from './index.page'
import { render, screen } from '@testing-library/react'

describe('Confirmación compra', () => {
  it('should render the title', () => {
    render(<PurchaseConfirmation />)
    const title = screen.getByText('¡Que disfrutes de tu compra!')
    expect(title).toBeInTheDocument()
  })
})

