import api from "../../utiles/api";
import actionTypes from "../actionTypes";



//thunk action

export const getProducts = (restId)=> (dispatch) => {
// send data to reducer
    dispatch({
        type:actionTypes.PRODUCT_LOADING
    })

    api.get(`/products?restaurantID=${restId}`)
    .then((res)=> dispatch({
        type:actionTypes.PRODUCT_SUCCESS,
        payload:res.data
    }))
    .catch((err) => dispatch({
        type:actionTypes.PRODUCT_ERROR,
        payload:err.message,
    }))

};