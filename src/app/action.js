import types from './types'

export const getProducts = (payload) => (render) => {
    render({
        type: types.GET_DATA,
        payload: payload
    })
}

export const saveProduct = (payload) => (render) => {
    render({
        type: types.SELECTED_DATA,
        payload: payload
    })
}