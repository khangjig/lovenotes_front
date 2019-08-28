import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoading: true
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
export default loginReducer