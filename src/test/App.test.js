import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'jest-fetch-mock'
fetchMock.dontMock()

let store

beforeEach(() => {
  const initialState = []
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  store = mockStore(initialState)
})

describe('<App />', () => {
  it('is rendering the component?"', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>)
    getByText('Past')
  })

  it('Button "Check" ', () => {
    const component = render(<Provider store={store}><App /></Provider>)
    component.getAllByText('Check')
  })
})
