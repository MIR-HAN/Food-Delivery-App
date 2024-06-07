import axios from "axios";
import api from "../../utiles/api";

// synchronous
export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const setProducts = (payload) => (
    {
        type: 'SET_PRODUCT',
        payload,
    }
)

export const setError = (payload) => (
    {
        type: 'SET_ERROR',
        payload,
    }
)
//asynchronous


export const getProducts = () => {
//getData must return an asynchronous function
    return (dispatch)=> {

dispatch(setLoading());

api.get('/products')
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err.message)))

    };
};