// import CardCharacter from './CardCharacter'
// import { render, screen } from '@testing-library/react'

// describe('CardCharacter', () => {
//   describe('when rendering default', () => {
//     it('should render the title', () => {
//       render(<CardCharacter name={'Captain American'} image={'image.jpg'} id={0} description="A real superhero!" />)
//       const title = screen.getByText('Captain American')
//       expect(title).toBeInTheDocument()
//     })
//   })
// })

// refactor

import React from 'react'
import CardCharacter from './CardCharacter'
import { render, screen } from '@testing-library/react'

describe('CardCharacter', () => {
  describe('when rendering default', () => {
    it('should render the title', () => {
      render(<CardCharacter name={'Captain American'} image={'image.jpg'} id={0} description="A real superhero!" />)
      const title = screen.getByText('Captain American')
      expect(title).toBeInTheDocument()
    })
  })
})
