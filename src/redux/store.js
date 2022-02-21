import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { dataStateReducer } from './reducers/dataStateReducer'
import { metaStateReducer } from './reducers/metaStateReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const reducer = combineReducers({
  data: dataStateReducer,
  meta: metaStateReducer
})
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)))

export default store
