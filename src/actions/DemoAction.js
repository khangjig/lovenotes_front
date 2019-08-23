import {
    GET_USERS_REQUEST,
    GET_USERS_REQUEST_SUCCESS,
    GET_USERS_REQUEST_FAIL
} from '../configs/ActionTypes'
import axios from 'axios'

export function requestGetUsers() {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_REQUEST
        })
        return axios.request({
            url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_USERS_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: GET_USERS_REQUEST_FAIL
            })
        })
    }
}