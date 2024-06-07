import Container from '../components/Container';
import React, { } from 'react'
import { useSelector } from 'react-redux';
import { getCard } from '../redux/actions/basketAction';
import Loader from "../components/Loader";
import Error from "../components/Error"
import CardItem from '../components/CardItem';
import { Link } from 'react-router-dom';


//redux thunk//
const Card = () => {
  const card = useSelector((store) => store.card)
  const cardArray = Object.values(card);

  const totalAmount = cardArray[2].reduce((total, i) => total + i.amount, 0)
  const totalPrice = cardArray[2].reduce((total, i) => total + i.amount * i.price, 0)

  return (
    <Container>
      <h1 className='text-3xl font-bold mb-5'>Basket</h1>

      <div>
        {card.isLoading ? (
          <Loader />
        ) : card.error ? (
          <Error message={card.error} />
        ) : (
          card.data.length == 0 ? <p className='
          flex flex-col items-center gap-3'>Baket is empty <Link to={'/'} className='
          border-2 p-2 shadow rounded hover:bg-gray-100'>Add Product</Link></p> :
            card.data.map((item) => <CardItem key={item.id} item={item} />)
        )}
      </div>

      <div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-3 flex-col shadow'>
            <div className=' flex gap-3 '>
              <span className='bg-gray-500 rounded text-white font-semibold'>Total Amount : </span>
              <span className='bg-red-500 px-2 rounded text-white font-semibold'>{totalAmount}</span>
            </div>

            <div className=' flex gap-3 '>
              <span className='bg-gray-500 rounded text-white font-semibold'>Total Price : </span>
              <span className='bg-red-500 px-2 rounded text-white font-semibold'>{totalPrice.toFixed(2)}</span>
            </div>
          </div>


          <div className='grid place-content-end '>
            <button className='bg-red-500 text-white py-1 px-3
    rounded transition hover:brightness-75 '>Order Now</button>
          </div>

        </div>

<form className='flex justify-start  my-[25px]'>
  <input className='border rounded' type="text" placeholder='coupon...' />
  <button className='bg-red-500 text-white py-1 px-3
    rounded transition hover:brightness-75 '>Apply Coupon</button>
</form>
      </div>

    </Container>
  )
}

export default Card;