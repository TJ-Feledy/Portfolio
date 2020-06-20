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
    GET_COUNT_FAILED
} from './actions.js'

const initialState = {
    isLoading: false,
    error: null,
    counter: {}
}

// export default function(state=initialState, action) {
//   switch (action.type) {
//     case 
//   }
// }