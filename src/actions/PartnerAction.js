import {
    ADD_PARTNER_REQUEST, ADD_PARTNER_REQUEST_SUCCESS, ADD_PARTNER_REQUEST_FAIL
} from '../configs/ActionTypes'
import axios from 'axios'

export function requestAddPartner() {
    return (dispatch) => {
        dispatch({
            type: ADD_PARTNER_REQUEST
        })
        return axios.request({
            url: ``,
            method: 'post'
        },
        ).then(res => {
            dispatch({
                type: ADD_PARTNER_REQUEST_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            dispatch({
                type: ADD_PARTNER_REQUEST_FAIL
            })
        })
    }
}