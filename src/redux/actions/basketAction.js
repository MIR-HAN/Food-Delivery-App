
import { v4 } from "uuid";
import actionTypes from "../actionTypes";
import api from "./../../utiles/api"


// get products from basket

export const getCard = () => (dispatch) => {
    dispatch({
        type: actionTypes.CARD_LOADING
    });

    api.get('card')
        .then((res) =>
            dispatch({
                type: actionTypes.CARD_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: actionTypes.CARD_ERROR,
                payload: err.message,
            })
        )
};

// add new product to basket

export const addToBasket = (product, rest) => (dispatch) => {
    // get product and restaurants info
    const newItem = {
        productId:product.id,
        id: v4(),
        title: product.title,
        price: product.price,
        image: product.image,
        restaurantName: rest.name,
        amount: 1,
    }

    api.post('/card', newItem)
    .then(()=> dispatch({
        type:actionTypes.ADD_TO_CARD,
        payload:newItem,
    }))

}

// update basket (increase/decrease)

export const updateItem = (id, newAmount)=> (dispatch)=>{
// updating api

api.patch(`/card/${id}`, {amount:newAmount})

.then((res)=> {
console.log(res)
dispatch({
    type:actionTypes.UPDATE_CARD,
    payload:res.data,
});
});

};

// remove product from basket

export const deleteItem =(id) => (dispatch)=> {

api.delete(`/card/${id}`)
.then(()=> dispatch({
    type:actionTypes.DELETE_FROM_CARD,
    payload: id,
}))

}