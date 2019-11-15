import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    EDIT_USERS_REQUEST, EDIT_USERS_REQUEST_SUCCESS, EDIT_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoadingGetUser: true,
    isLoadingGetAvatar: true,
    userInfo: [],
    avatarUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoadingGetUser: true
            }
        case GET_USERS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingGetUser: false,
                userInfo: action.payload,
                avatarUser: 'http://192.168.37.102:3000/api/avatar?token='+action.payloadToken

            }
        case GET_USERS_REQUEST_FAIL:
            return {
                ...state,
                isLoadingGetUser: false
            }
        default:
            return state
    }
}
export default userReducer