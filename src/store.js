import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/reducer'

const store = createStore(
  // connectRouter(rootReducer),
  // compose(applyMiddleware(thunk))
  rootReducer,
  applyMiddleware(thunk)
)


export default store