import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
} from '../configs/ActionTypes'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'

export function requestGetToken(username, password) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.102:3000/auth/token`,
            method: 'post',
            data: {
                email: username,
                password: password
            },
            headers: {
                'Content-Type': 'application/json' 
            }
        },
        ).then(res => {
            AsyncStorage.setItem(ACCESS_TOKEN_ASYNCSTORAGE, res.data.accessToken)
            AsyncStorage.setItem(REFRESH_TOKEN_ASYNCSTORAGE, res.data.refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken

            dispatch({
                type: LOGIN_REQUEST_SUCCESS,
                payload: "Logged in successfully"
            })

        }).catch(err => {
            console.log(err)
            dispatch({
                type: LOGIN_REQUEST_FAIL,
                payload: "The email or password is not correct"
            })
        })
    }
}