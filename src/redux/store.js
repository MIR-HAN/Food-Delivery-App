import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import reastaurantReducer from "./reducers/restaurantReducer";


const rootReducer = combineReducers({
   products: productReducer,
    card: basketReducer,
    restaurants: reastaurantReducer,
})
//applying middleware to store//
export default createStore(rootReducer,applyMiddleware(thunk));


 