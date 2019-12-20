import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    GET_AVATAR_REQUEST, GET_AVATAR_REQUEST_SUCCESS, GET_AVATAR_REQUEST_FAIL,
    EDIT_USERNAME_REQUEST, EDIT_USERNAME_REQUEST_SUCCESS, EDIT_USERNAME_REQUEST_FAIL,
    EDIT_LOVEDAY_REQUEST, EDIT_LOVEDAY_REQUEST_SUCCESS, EDIT_LOVEDAY_REQUEST_FAIL,
    EDIT_BIRTHDAY_REQUEST, EDIT_BIRTHDAY_REQUEST_SUCCESS, EDIT_BIRTHDAY_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL,
    GET_NAME_PARTNER_REQUEST, GET_NAME_PARTNER_SUCCESS, GET_NAME_PARTNER_FAIL,
    GET_AVATAR_PARTNER_REQUEST, GET_AVATAR_PARTNER_SUCCESS, GET_AVATAR_PARTNER_FAIL,
    UPDATE_AVATAR_PARTNER_REQUEST, UPDATE_AVATAR_PARTNER_SUCCESS, UPDATE_AVATAR_PARTNER_FAIL,
    EDIT_NAME_PARTNER_REQUEST, EDIT_NAME_PARTNER_SUCCESS, EDIT_NAME_PARTNER_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoadingGetUser: true,
    isLoadingGetAvatar: true,
    isLoadingUpdateAvatar: true,
    isLoadingUpdateUsername: true,
    isLoadingUpdateLoveday: true,
    isLoadingUpdateBirthday: true,
    isLoadingGetNamePartner: true,
    isLoadingGetAvatarPartner: true,
    isLoadingUpdateNamePartner: true,
    isLoadingUpdateAvatarPartner: true,
    userInfo: [],
    avatarUser: null,
    message: null,
    namePartner: null,
    avatarPartner: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //get user
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
        //update avatar user
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
        //get avatar user
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
        //edit username
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
        //edit loveday     
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
        //edit birthday
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
        //get name partner
        case GET_NAME_PARTNER_REQUEST:
            return {
                ...state,
                isLoadingGetNamePartner: true
            }
        case GET_NAME_PARTNER_SUCCESS:
            return {
                ...state,
                namePartner: action.payload,
                isLoadingGetNamePartner: false
            }
        case GET_NAME_PARTNER_FAIL:
            return {
                ...state,
                isLoadingGetNamePartner: false
            }
        //get avatar partner
        case GET_AVATAR_PARTNER_REQUEST:
            return {
                ...state,
                isLoadingGetAvatarPartner: true
            }
        case GET_AVATAR_PARTNER_SUCCESS:
            return {
                ...state,
                avatarPartner: action.payload,
                isLoadingGetAvatarPartner: false
            }
        case GET_AVATAR_PARTNER_FAIL:
            return {
                ...state,
                isLoadingGetAvatarPartner: false
            }
        //edit name partner
        case EDIT_NAME_PARTNER_REQUEST:
            return {
                ...state,
                isLoadingUpdateNamePartner: true
            }
        case EDIT_NAME_PARTNER_SUCCESS:
            return {
                ...state,
                isLoadingUpdateNamePartner: false
            }
        case EDIT_NAME_PARTNER_FAIL:
            return {
                ...state,
                isLoadingUpdateNamePartner: false
            }
        //edit avatar partner
        case UPDATE_AVATAR_PARTNER_REQUEST:
            return {
                ...state,
                isLoadingUpdateAvatarPartner: true
            }
        case UPDATE_AVATAR_PARTNER_SUCCESS:
            return {
                ...state,
                isLoadingUpdateAvatarPartner: false
            }
        case UPDATE_AVATAR_PARTNER_FAIL:
            return {
                ...state,
                isLoadingUpdateAvatarPartner: false
            }

        default:
            return state
    }
}
export default userReducer