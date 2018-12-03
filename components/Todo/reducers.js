import { ADD_ITEM } from './types'

const initialState = {
    items: [],
};

function addItemToList(state, newItem) {
    return {
        ...state,
        items: [state.items, newItem]
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return addItemToList(state, action.newItem);
        default:
            return state;
    }
}

export default reducer;