import React from 'react'
import CardComic from './CardComic'
import { render, screen } from '@testing-library/react'

describe('CardComic', () => {
  describe('when rendering default', () => {
    it('should render the title', () => {
      render(
        <CardComic
          title={'Gun Theory (2003) #3'}
          description={'A real superhero!'}
          image={'image.jpg'}
          id={0}
          price={0}
          oldPrice={0}
          stock={0}
          characters={[]}
        />
      )
      const title = screen.getByText('Gun Theory (2003) #3')
      expect(title).toBeInTheDocument()
    })
  })
})
