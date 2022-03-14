import types from './types'

const initialState = {
    loading: true,
    data: null,
    error: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export const saveProductsReducer = (state = [], action) => {
    switch (action.type) {
        case types.SELECTED_DATA:
            return ([
                ...state,
                action.payload
            ])
        default:
            return state
    }
}

export const deletedProductsReducer = (state = [], action) => {
    switch (action.type) {
        case types.DELETED_DATA:
            return (
                action.payload
            )
        default:
            return state
    }
}