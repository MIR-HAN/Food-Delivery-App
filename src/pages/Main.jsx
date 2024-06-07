import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../redux/actions/restauranAction';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RestaurantCards from '../components/RestaurantCards';


const Main = () => {
  // get data from store
  const { isLoading, error, restaurants } = useSelector((store) => store.restaurants);

  const dispatch = useDispatch();
    // method to get data
  const getData = () => {
    dispatch(getRestaurants());
  };

  useEffect(() => {

    getData();

  }, []);


  return (
    <Container>
      <h1 className='text-3xl '>All restaurants</h1>

      <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData} />
        ) : (
         restaurants.length > 0 && restaurants.map((item) =>  <RestaurantCards key={item.id} data={item}/>)
        )}

      </div>

    </Container>


  )
}

export default Main;