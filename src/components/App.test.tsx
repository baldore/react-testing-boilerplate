import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('should work!', () => {
    const { container } = render(<App />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Hola mundo genial
        </div>
      </div>
    `)
  })
})
