import { combineReducers } from 'redux'
import demoReducer from './demoReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer

