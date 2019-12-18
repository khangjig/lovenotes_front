import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    GET_AVATAR_REQUEST, GET_AVATAR_REQUEST_SUCCESS, GET_AVATAR_REQUEST_FAIL,
    EDIT_USERNAME_REQUEST, EDIT_USERNAME_REQUEST_SUCCESS, EDIT_USERNAME_REQUEST_FAIL,
    EDIT_LOVEDAY_REQUEST, EDIT_LOVEDAY_REQUEST_SUCCESS, EDIT_LOVEDAY_REQUEST_FAIL,
    EDIT_BIRTHDAY_REQUEST, EDIT_BIRTHDAY_REQUEST_SUCCESS,EDIT_BIRTHDAY_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL

} from '../configs/ActionTypes'
import axios from 'axios'
import moment from 'moment'
const FormData = require('form-data')

export function requestGetUsers() {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/users`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_USERS_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_USERS_REQUEST_FAIL
            })
        })
    }
}

export function requestGetAvatarUsers() {
    return (dispatch) => {
        dispatch({
            type: GET_AVATAR_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/avatar/image-base64`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_AVATAR_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_AVATAR_REQUEST_FAIL
            })
        })
    }
}

export function requestEditUsername(name) {

    var formData = new FormData()
    formData.append('newname', name)

    return (dispatch) => {
        dispatch({
            type: EDIT_USERNAME_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/users/EditNameUser`,
            method: 'patch',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetUsers(),{
                    type: EDIT_USERNAME_REQUEST_SUCCESS
                })
        }).catch(err => {
            dispatch({
                type: EDIT_USERNAME_REQUEST_FAIL
            })
        })
    }
}

export function requestEditLoveDay(loveday) {

    var formData = new FormData()
    formData.append('loveDay', moment(loveday).format('YYYY MM DD'))

    return (dispatch) => {
        dispatch({
            type: EDIT_LOVEDAY_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/users/UpdateloveDay`,
            method: 'patch',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetUsers(),{
                    type: EDIT_LOVEDAY_REQUEST_SUCCESS
                })
        }).catch(err => {
            dispatch({
                type: EDIT_LOVEDAY_REQUEST_FAIL
            })
        })
    }
}

export function requestEditBirthday(birthday) {

    var formData = new FormData()
    formData.append('loveDay', moment(birthday).format('YYYY MM DD'))

    return (dispatch) => {
        dispatch({
            type: EDIT_BIRTHDAY_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/users/EditBirthday`,
            method: 'patch',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetUsers(),{
                    type: EDIT_BIRTHDAY_REQUEST_SUCCESS
                })
        }).catch(err => {
            dispatch({
                type: EDIT_BIRTHDAY_REQUEST_FAIL
            })
        })
    }
}

export function requestAddUsers() {
    return (dispatch) => {
        dispatch({
            type: ADD_USERS_REQUEST
        })
        return axios.request({
            url: ``,
            method: 'post'
        },
        ).then(res => {
            dispatch({
                type: ADD_USERS_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: ADD_USERS_REQUEST_FAIL
            })
        })
    }
}

export function requestChangePasswordUsers() {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PASSWORD_REQUEST
        })
        return axios.request({
            url: ``,
            method: 'put'
        },
        ).then(res => {
            dispatch({
                type: CHANGE_PASSWORD_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: CHANGE_PASSWORD_REQUEST_FAIL
            })
        })
    }
}

export function requestUpdateAvatarUsers(image) {

    let formData = new FormData
    formData.append('userId', 1)
    formData.append('avatar', {
        name: image.fileName,
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
        type: 'image/jpeg',
    })

    return (dispatch) => {
        dispatch({
            type: UPDATE_AVATAR_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/Avatar/updated`,
            method: 'post',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetAvatarUsers(), {
                type: UPDATE_AVATAR_REQUEST_SUCCESS
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: UPDATE_AVATAR_REQUEST_FAIL
            })
        })
    }
}