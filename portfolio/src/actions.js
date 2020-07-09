import axios from 'axios'
/* action type */
export const INITIALIZE_COUNT_START = 'INITIALIZE_COUNT_START'
export const INITIALIZE_COUNT_SUCCESS = 'INITIALIZE_COUNT_SUCCESS'
export const INITIALIZE_COUNT_FAILED = 'INITIALIZE_COUNT_FAILED'

export const UPDATE_COUNT_START = 'UPDATE_COUNT_START'
export const UPDATE_COUNT_SUCCESS = 'UPDATE_COUNT_SUCCESS'
export const UPDATE_COUNT_FAILED = 'UPDATE_COUNT_FAILED'

export const GET_COUNT_START = 'GET_COUNT_START'
export const GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS'
export const GET_COUNT_FAILED = 'GET_COUNT_FAILED'

export const TEXT_START = 'TEXT_START'
export const TEXT_SUCCESS = 'TEXT_SUCCESS'
export const TEXT_FAILED = 'TEXT_FAILED'

/* action creator */
export function initalizeCount(payload) {
    return (dispatch) => {
        dispatch({ type: INITIALIZE_COUNT_START })

        return axios.post('https://tjs-portfolio.herokuapp.com/api/count/initialize', payload)
            .then(res => {
                dispatch({ type: INITIALIZE_COUNT_SUCCESS, payload: payload })
            })
            .catch(err => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: INITIALIZE_COUNT_FAILED, payload })
            })
    }
}

export function updateCount(payload, id) {
    return (dispatch) => {
        dispatch({ type: UPDATE_COUNT_START })

        return axios.put(`https://tjs-portfolio.herokuapp.com/api/count/update/${id}`, payload)
            .then(res => {
                dispatch({ type: UPDATE_COUNT_SUCCESS, payload: payload, id: id })
            })
            .catch(err => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: UPDATE_COUNT_FAILED, payload })
            })
    }
}

export function getCount(id) {
    return (dispatch) => {
        dispatch({ type: GET_COUNT_START })

        return axios.get(`https://tjs-portfolio.herokuapp.com/api/count/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: GET_COUNT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: GET_COUNT_FAILED, payload })
            })
    }
}

export function text(body) {
    return (dispatch) => {
        dispatch({ type: TEXT_START })

        return axios.post(`https://tjs-portfolio.herokuapp.com/text`, { body })
            .then(res => {
                console.log(res)
                dispatch({ type: TEXT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: TEXT_FAILED, payload })
            })
    }
}