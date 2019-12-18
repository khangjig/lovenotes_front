import {
    GET_LIST_NOTE_REQUEST, GET_LIST_NOTE_SUCCESS, GET_LIST_NOTE_FAIL,
} from '../configs/ActionTypes'

const initialState = {
    isLoadingGetListNote: true,
    listNote : null
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
                messages: action.payload,
                isLoadingGetListNote: false
            }
        default:
            return state
    }
}
export default noteReducer