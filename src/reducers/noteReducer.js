import {
    GET_LIST_NOTE_REQUEST, GET_LIST_NOTE_SUCCESS, GET_LIST_NOTE_FAIL,
    ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, ADD_NOTE_FAIL,
    GET_NOTE_INFO_REQUEST, GET_NOTE_INFO_SUCCESS, GET_NOTE_INFO_FAIL,
    DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAIL,
    GET_NOTE_IMAGES_REQUEST, GET_NOTE_IMAGES_SUCCESS, GET_NOTE_IMAGES_FAIL,
    ON_THIS_DAY_REQUEST, ON_THIS_DAY_SUCCESS, ON_THIS_DAY_FAIL,
    BY_WEEK_REQUEST, BY_WEEK_SUCCESS, BY_WEEK_FAIL
} from '../configs/ActionTypes'

const initialState = {
    isLoadingGetListNote: true,
    isLoadingAddNote: true,
    isLoadingGetNoteInfo: true,
    isLoadingDeleteNote: true,
    isLoadingGetNoteImages: true,
    isLoadingGetNoteOnThisDay: true,
    isLoadingGetNoteByWeek: true,
    listNote: null,
    noteInfo: null,
    listNoteImages: null,
    listNoteOnThisDay: null,
    listNoteByWeek: null,
    message: null
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_NOTE_REQUEST:
            return {
                ...state,
                isLoadingGetListNote: true
            }
        case GET_LIST_NOTE_SUCCESS:
            return {
                ...state,
                listNote: action.payload,
                isLoadingGetListNote: false
            }
        case GET_LIST_NOTE_FAIL:
            return {
                ...state,
                isLoadingGetListNote: false
            }

        case ADD_NOTE_REQUEST:
            return {
                ...state,
                isLoadingAddNote: true
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isLoadingAddNote: false
            }
        case ADD_NOTE_FAIL:
            return {
                ...state,
                isLoadingAddNote: false
            }

        case GET_NOTE_INFO_REQUEST:
            return {
                ...state,
                isLoadingGetNoteInfo: true
            }
        case GET_NOTE_INFO_SUCCESS:
            return {
                ...state,
                noteInfo: action.payload,
                isLoadingGetNoteInfo: false
            }
        case GET_NOTE_INFO_FAIL:
            return {
                ...state,
                isLoadingGetNoteInfo: false
            }

        case DELETE_NOTE_REQUEST:
            return {
                ...state,
                isLoadingDeleteNote: true
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                isLoadingDeleteNote: false
            }
        case DELETE_NOTE_FAIL:
            return {
                ...state,
                isLoadingDeleteNote: false
            }

        case GET_NOTE_IMAGES_REQUEST:
            return {
                ...state,
                isLoadingGetNoteImages: true
            }
        case GET_NOTE_IMAGES_SUCCESS:
            return {
                ...state,
                listNoteImages: action.payload,
                isLoadingGetNoteImages: false
            }
        case GET_NOTE_IMAGES_FAIL:
            return {
                ...state,
                isLoadingGetNoteImages: false
            }

        case ON_THIS_DAY_REQUEST:
            return {
                ...state,
                isLoadingGetNoteOnThisDay: true
            }
        case ON_THIS_DAY_SUCCESS:
            return {
                ...state,
                listNoteOnThisDay: action.payload,
                isLoadingGetNoteOnThisDay: false
            }
        case ON_THIS_DAY_FAIL:
            return {
                ...state,
                isLoadingGetNoteOnThisDay: false
            }

        case BY_WEEK_REQUEST:
            return {
                ...state,
                isLoadingGetNoteByWeek: true
            }
        case BY_WEEK_SUCCESS:
            return {
                ...state,
                listNoteByWeek: action.payload,
                isLoadingGetNoteByWeek: false
            }
        case BY_WEEK_FAIL:
            return {
                ...state,
                isLoadingGetNoteByWeek: false
            }

        default:
            return state
    }
}
export default noteReducer