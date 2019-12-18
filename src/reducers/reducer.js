import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import userReducer from './userReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
    loginReducer,
    userReducer,
    noteReducer
})

export default rootReducer

