import {
    GET_LIST_NOTE_REQUEST, GET_LIST_NOTE_SUCCESS, GET_LIST_NOTE_FAIL,
    GET_MORE_NOTE_REQUEST, GET_MORE_NOTE_SUCCESS, GET_MORE_NOTE_FAIL,
    ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, ADD_NOTE_FAIL,
    GET_NOTE_INFO_REQUEST, GET_NOTE_INFO_SUCCESS, GET_NOTE_INFO_FAIL,
    DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAIL,
    GET_NOTE_IMAGES_REQUEST, GET_NOTE_IMAGES_SUCCESS, GET_NOTE_IMAGES_FAIL,
    ON_THIS_DAY_REQUEST, ON_THIS_DAY_SUCCESS, ON_THIS_DAY_FAIL,
    BY_WEEK_REQUEST, BY_WEEK_SUCCESS, BY_WEEK_FAIL
} from '../configs/ActionTypes'
import axios from 'axios'
import moment from 'moment'

const FormData = require('form-data')


export function requestGetListNotes(pageData) {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_NOTE_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note/list`,
            method: 'get',
            params: {
                page: pageData.page,
                size: pageData.size
            }
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

export function requestGetMoreNotes(pageData) {
    return (dispatch) => {
        dispatch({
            type: GET_MORE_NOTE_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note/list`,
            method: 'get',
            params: {
                page: pageData.page,
                size: pageData.size
            }
        },
        ).then(res => {
            dispatch({
                type: GET_MORE_NOTE_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_MORE_NOTE_FAIL
            })
        })
    }
}

export function requestAddNote(title, content, listImage, date, notifi, pageData) {

    let formData = new FormData
    formData.append('title', title)
    formData.append('content', content)
    formData.append('anniversary', moment(date).format('YYYY/MM/DD'))
    formData.append('hidden', false)
    formData.append('alarm', notifi)
    listImage.forEach((image) => {
        const file = {
            name: Math.floor(Math.random() * Math.floor(999999999)) + '.jpg',
            uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
            type: 'image/jpeg',
        }
        formData.append('images', file)
    })

    return (dispatch) => {
        dispatch({
            type: ADD_NOTE_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note`,
            method: 'post',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetListNotes(pageData),
                requestGetNoteOnThisDay(),
                requestGetNoteByWeek(), {
                payload: 'Add Successfully!',
                type: ADD_NOTE_SUCCESS
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: ADD_NOTE_FAIL
            })
        })
    }
}

export function requestGetInfoNote(id) {

    return (dispatch) => {
        dispatch({
            type: GET_NOTE_INFO_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note/getinfo`,
            method: 'get',
            params: {
                id: id
            }
        },
        ).then(res => {
            dispatch({
                type: GET_NOTE_INFO_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_NOTE_INFO_FAIL
            })
        })
    }
}

export function requestGetNoteImage(id) {

    return (dispatch) => {
        dispatch({
            type: GET_NOTE_IMAGES_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/noteimage/list`,
            method: 'get',
            params: {
                noteId: id
            }
        },
        ).then(res => {
            dispatch({
                type: GET_NOTE_IMAGES_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_NOTE_IMAGES_FAIL
            })
        })
    }
}

export function requestDeleteNote(id, pageData) {

    var formData = new FormData()
    formData.append('id', id)

    return (dispatch) => {
        dispatch({
            type: DELETE_NOTE_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note`,
            method: 'delete',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        ).then(res => {
            dispatch(
                requestGetListNotes(pageData), {
                type: DELETE_NOTE_SUCCESS
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: DELETE_NOTE_FAIL
            })
        })
    }
}

export function requestGetNoteOnThisDay() {

    return (dispatch) => {
        dispatch({
            type: ON_THIS_DAY_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note/onthisday`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: ON_THIS_DAY_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: ON_THIS_DAY_FAIL
            })
        })
    }
}

export function requestGetNoteByWeek() {

    return (dispatch) => {
        dispatch({
            type: BY_WEEK_REQUEST
        })
        return axios.request({
            url: `http://192.168.37.104:3000/api/note/byweek`,
            method: 'get'
        },
        ).then(res => {
            dispatch({
                type: BY_WEEK_SUCCESS,
                payload: res.data.results
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: BY_WEEK_FAIL
            })
        })
    }
}