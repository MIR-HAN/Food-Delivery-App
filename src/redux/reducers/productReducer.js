import actionTypes from "../actionTypes";

actionTypes

const initialState = {
    isLoading: false,
    error: false,
    products: [],
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.PRODUCT_LOADING:
            return { ...state, isLoading: true };
        case actionTypes.PRODUCT_ERROR:
            return { ...state, isLoading: false, error: action.payload };

        case actionTypes.PRODUCT_SUCCESS:
            return { ...state, isLoading:false, error: false, products:action.payload };

        default:
            return state;
    }
};

export default productReducer;