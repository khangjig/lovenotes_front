import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    EDIT_USERS_REQUEST, EDIT_USERS_REQUEST_SUCCESS, EDIT_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    GET_AVATAR_REQUEST, GET_AVATAR_REQUEST_SUCCESS, GET_AVATAR_REQUEST_FAIL,
    EDIT_USERNAME_REQUEST,EDIT_USERNAME_REQUEST_SUCCESS,EDIT_USERNAME_REQUEST_FAIL,
    EDIT_LOVEDAY_REQUEST, EDIT_LOVEDAY_REQUEST_SUCCESS, EDIT_LOVEDAY_REQUEST_FAIL,
    EDIT_BIRTHDAY_REQUEST, EDIT_BIRTHDAY_REQUEST_SUCCESS,EDIT_BIRTHDAY_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoadingGetUser: true,
    isLoadingGetAvatar: true,
    isLoadingUpdateAvatar: true,
    isLoadingUpdateUsername: true,
    isLoadingUpdateLoveday: true,
    isLoadingUpdateBirthday: true,
    userInfo: [],
    avatarUser: null,
    message: null
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
                userInfo: action.payload

            }
        case GET_USERS_REQUEST_FAIL:
            return {
                ...state,
                isLoadingGetUser: false
            }

        case UPDATE_AVATAR_REQUEST:
            return {
                ...state,
                isLoadingUpdateAvatar: true
            }
        case UPDATE_AVATAR_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingUpdateAvatar: false

            }
        case UPDATE_AVATAR_REQUEST_FAIL:
            return {
                ...state,
                isLoadingUpdateAvatar: false
            }

        case GET_AVATAR_REQUEST:
            return {
                ...state,
                isLoadingGetAvatar: true
            }
        case GET_AVATAR_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingGetAvatar: false,
                avatarUser: action.payload

            }
        case GET_AVATAR_REQUEST_FAIL:
            return {
                ...state,
                isLoadingGetAvatar: false
            }

        case EDIT_USERNAME_REQUEST:
            return {
                ...state,
                isLoadingUpdateUsername: true
            }
        case EDIT_USERNAME_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingUpdateUsername: false

            }
        case EDIT_USERNAME_REQUEST_FAIL:
            return {
                ...state,
                isLoadingUpdateUsername: false
            }
        
        case EDIT_LOVEDAY_REQUEST:
            return {
                ...state,
                isLoadingUpdateLoveday: true
            }
        case EDIT_LOVEDAY_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingUpdateLoveday: false

            }
        case EDIT_LOVEDAY_REQUEST_FAIL:
            return {
                ...state,
                isLoadingUpdateLoveday: false
            }

        case EDIT_BIRTHDAY_REQUEST:
            return {
                ...state,
                isLoadingUpdateBirthday: true
            }
        case EDIT_BIRTHDAY_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingUpdateBirthday: false

            }
        case EDIT_BIRTHDAY_REQUEST_FAIL:
            return {
                ...state,
                isLoadingUpdateBirthday: false
            }

            
        default:
            return state
    }
}
export default userReducer