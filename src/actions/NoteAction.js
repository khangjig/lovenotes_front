import {
    GET_LIST_NOTE_REQUEST, GET_LIST_NOTE_SUCCESS, GET_LIST_NOTE_FAIL,
} from '../configs/ActionTypes'
import axios from 'axios'
const FormData = require('form-data')

export function requestGetListNotes() {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_NOTE_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.103:3000/api/note/list?page=1&size=10`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: GET_LIST_NOTE_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_LIST_NOTE_FAIL
            })
        })
    }
}