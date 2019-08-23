import {
    GET_USERS_REQUEST,
    GET_USERS_REQUEST_SUCCESS,
    GET_USERS_REQUEST_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoading: true,
    listData: []
}

const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_USERS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listData: action.payload
            }
        case GET_USERS_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
export default demoReducer