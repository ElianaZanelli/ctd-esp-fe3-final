import React from 'react'
import CharacterDetails from './[id]'
import { render, screen } from '@testing-library/react'

describe('Personaje', () => {
  it('should render the title', () => {
    render(<CharacterDetails character={undefined} />)
    const title = screen.getByText('Detalle personaje')
    expect(title).toBeInTheDocument()
  })
})
