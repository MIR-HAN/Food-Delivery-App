import api from "../../utiles/api"
import actionTypes from "../actionTypes";



export const getRestaurants =(restId)=> (dispatch)=>{

    dispatch({
        type:actionTypes.REST_LOADING,
    });
//conditional request
    const url = restId ? `/restaurants/${restId}`: '/restaurants';

    api.get(url)
    .then((res)=> dispatch({
        type:actionTypes.REST_SUCCESS,
        payload:res.data,
       
    }))
    .catch((err) => dispatch({
        type:actionTypes.REST_ERROR,
        payload:err.message,
    }) )


};
