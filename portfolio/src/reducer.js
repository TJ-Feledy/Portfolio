/* import action types from actions.js */
import {
    INITIALIZE_COUNT_START,
    INITIALIZE_COUNT_SUCCESS,
    INITIALIZE_COUNT_FAILED,
    UPDATE_COUNT_START,
    UPDATE_COUNT_SUCCESS,
    UPDATE_COUNT_FAILED,
    GET_COUNT_START,
    GET_COUNT_SUCCESS,
    GET_COUNT_FAILED,
    TEXT_START,
    TEXT_SUCCESS,
    TEXT_FAILED,
} from './actions.js'

const initialState = {
    isLoading: false,
    error: null,
    counter: {}
}

export default function(state=initialState, action) {
  switch (action.type) {
    case INITIALIZE_COUNT_START: {
        return {
            ...state,
            isLoading: true
        }
    }
    case INITIALIZE_COUNT_SUCCESS: {
        console.log(action.payload)
        return {
            ...state,
            isLoading: false,
            error: null,
            counter: action.payload
        }
    }
    case INITIALIZE_COUNT_FAILED: {
        console.log(action.payload)
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    case UPDATE_COUNT_START: {
        return {
            ...state,
            isLoading: true
        }
    }
    case UPDATE_COUNT_SUCCESS: {
        console.log(action.payload)
        return {
            ...state,
            isLoading: false,
            error: null,
            counter: action.payload
        }
    }
    case UPDATE_COUNT_FAILED: {
        console.log(action.payload)
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    case GET_COUNT_START: {
        return {
            ...state,
            isLoading: true
        }
    }
    case GET_COUNT_SUCCESS: {
        console.log(action.payload)
        return {
            ...state,
            isLoading: false,
            error: null,
            counter: action.payload
        }
    }
    case GET_COUNT_FAILED: {
        console.log(action.payload)
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    case TEXT_START: {
        return {
            ...state,
            isLoading: true
        }
    }
    case TEXT_SUCCESS: {
        console.log(action.payload)
        return {
            ...state,
            isLoading: false,
            error: null,
            counter: action.payload
        }
    }
    case TEXT_FAILED: {
        console.log(action.payload)
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    default:
        return state
  }
}