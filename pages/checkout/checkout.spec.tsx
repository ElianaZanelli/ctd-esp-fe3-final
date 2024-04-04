/*
* Usar la extensión better comments
! se modifica la importación dh- marvel, por  este error  Unable to resolve path to module dado en eslint
*/
import React from 'react'
import { type NextRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import Checkout from './index.page'

const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: '',
    pathname: '/checkout',
    route: '/checkout?comic=82967',
    query: { comic: '82967' },
    asPath: '/checkout?comic=82967',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router
  }
}

const router = createMockRouter({})

describe('Checkout', () => {
  it('should render the title', () => {
    render(
      <RouterContext.Provider value={router}>
        <Checkout />
      </RouterContext.Provider>
    )
    const title = screen.getByText('Checkout')
    expect(title).toBeInTheDocument()
  })
})

// npm test checkout.spec.tsx
