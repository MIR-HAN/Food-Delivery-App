import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import React, { useEffect } from 'react';
import { getProducts } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ProductCard from '../components/ProductCard';
import { FaFireFlameCurved } from "react-icons/fa6";
import { getRestaurants } from '../redux/actions/restauranAction';
import RestaurantDetail from '../components/RestaurantDetail';
import { addToBasket, updateItem } from '../redux/actions/basketAction';



const Restaurant = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const productState = useSelector((store) => store.products)
    const { isLoading, error, restaurants } = useSelector((store) => store.restaurants)

    // get products fron api
    useEffect(() => {
        dispatch(getRestaurants(id))
        dispatch(getProducts(id))

    }, [])


    //trigger add item to basket
    const handleAdd = (item, found) => {
        // if product found in the basket update
        // else add to basket
        found ? dispatch((updateItem(found.id, found.amount + 1))) :
            dispatch(addToBasket(item, restaurants));
    };

    return (

        <div>
            <div className='shadow'>
                <Container>
                    <h1>{isLoading ? <Loader /> : !error &&
                        <RestaurantDetail data={restaurants} />}</h1>
                </Container>
                <hr />
            </div>

            <Container>
                <div className='mb-6'>
                    <h2 className='flex gap-2 items-center text-2xl font-bold'>
                        <FaFireFlameCurved className='text-red-500' />
                        <i></i>
                        Popular
                    </h2>

                    <p className='text-gray-600'>The restaurant's most preferred products</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                    {productState.isLoading ? (
                        <Loader />
                    ) : productState.error ? (
                        <Error message={productState.error} />
                    ) : (
                        productState.products.map((item) => <ProductCard key={item.id} item={item} handleAdd={handleAdd} />)
                    )}
                </div>
                <Link to={"/card"} >
                    <div className='grid place-content-end my-[10px]'>
                        <button className='bg-red-500 text-white py-1 px-3
    rounded transition hover:brightness-75 '>Go To Basket</button>
                    </div>
                </Link>
            </Container>
        </div>

    )
}

export default Restaurant;
