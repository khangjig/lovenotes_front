import {
    GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAIL,
    ADD_USERS_REQUEST, ADD_USERS_REQUEST_SUCCESS, ADD_USERS_REQUEST_FAIL,
    EDIT_USERS_REQUEST, EDIT_USERS_REQUEST_SUCCESS, EDIT_USERS_REQUEST_FAIL,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_REQUEST_SUCCESS, CHANGE_PASSWORD_REQUEST_FAIL,
    UPDATE_AVATAR_REQUEST, UPDATE_AVATAR_REQUEST_SUCCESS, UPDATE_AVATAR_REQUEST_FAIL
} from '../configs/ActionTypes'
import axios from 'axios'

import { convertToken } from '../helpers/ConvertToken'


export function requestGetUsers() {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.102:3000/api/users/1`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_USERS_REQUEST_SUCCESS,
                payload: res.data.results,
                payloadToken: convertToken(axios.defaults.headers.common['Authorization'])
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_USERS_REQUEST_FAIL
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

export function requestEditUsers() {
    return (dispatch) => {
        dispatch({
            type: EDIT_USERS_REQUEST
        })
        return axios.request({
            url: ``,
            method: 'put'
        },
        ).then(res => {
            dispatch({
                type: EDIT_USERS_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: EDIT_USERS_REQUEST_FAIL
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

export function requestUpdateAvatarUsers() {
    return (dispatch) => {
        dispatch({
            type: UPDATE_AVATAR_REQUEST
        })
        return axios.request({
            url: ``,
            method: 'put'
        },
        ).then(res => {
            dispatch({
                type: UPDATE_AVATAR_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: UPDATE_AVATAR_REQUEST_FAIL
            })
        })
    }
}