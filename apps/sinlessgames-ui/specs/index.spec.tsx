import { render } from '@testing-library/react'

import Page from '../src/app/page'

describe('Index Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
  })

  it('renders the welcome message', () => {
    const { getByText } = render(<Page />)
    expect(getByText('Welcome to SinLess Games!')).toBeDefined()
  })

  it('renders the introduction description', () => {
    const { getByText } = render(<Page />)
    expect(
      getByText(/SinLess Games is a game development studio/i)
    ).toBeDefined()
  })

  it('renders the image', () => {
    const { getByAltText } = render(<Page />)
    expect(
      getByAltText('Welcome to SinLess Games!') as HTMLImageElement
    ).toBeDefined()
  })
})
