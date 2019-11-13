import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    EDIT_USERS_REQUEST, EDIT_USERS_REQUEST_SUCCESS, EDIT_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    GET_AVATAR_REQUEST, GET_AVATAR_REQUEST_SUCCESS, GET_AVATAR_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL
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