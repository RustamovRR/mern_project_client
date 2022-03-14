import types from './types'

export const getProducts = (data) => (render) => {
    render({
        type: types.GET_DATA,
        payload: data
    })
}

export const saveProduct = (payload) => (render) => {
    render({
        type: types.SELECTED_DATA,
        payload: payload
    })
}

export const deletedProducts = (payload) => (render) => {
    render({
        type: types.DELETED_DATA,
        payload: payload
    })
}