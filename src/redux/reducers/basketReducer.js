import actionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: false,
    data: [],
}


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARD_LOADING:
            return { ...state, isLoading: true };

        case actionTypes.CARD_ERROR:
            return { ...state, isLoading: false, error: action.payload };

        case actionTypes.CARD_SUCCESS:
            return { ...state, isLoading: false, error: false, data: action.payload };

        case actionTypes.ADD_TO_CARD:

            return { ...state, data: state.data.concat(action.payload) }

        case actionTypes.UPDATE_CARD:
            //replace old item with new item
            const updateArr = state.data.map((i) => i.id === action.payload.id ? action.payload : i);

            return { ...state, data: updateArr }
        case actionTypes.DELETE_FROM_CARD:
            //remove item from array with id
            const filtered = state.data.filter((i) => i.id !== action.payload);
            return { ...state, data: filtered }

        default:
            return state;
    }
};

export default basketReducer;