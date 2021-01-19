import {combineReducers} from 'redux'
import * as types from '../types'


// INITIAL TIMER STATE
const initialTimerState = {
    posts: null,
    post: null,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, {type, payload}) => {
    switch (type) {
        case types.POSTS:
            return {
                posts: payload,
            }
        case types.POST:
            return {
                post: payload,
            }
        case types.SEND:
            return {
                post: payload,
            }
        default:
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    postStorage: timerReducer,
}

export default combineReducers(reducers)
