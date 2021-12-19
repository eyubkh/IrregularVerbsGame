import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'

test('is the component rendering?', () => {
  const component = render(<App />)
  component.getByText('past')
})
