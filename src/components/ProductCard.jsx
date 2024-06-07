import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ item, handleAdd }) => {
  const { data } = useSelector((store) => store.card);

  const found = data.find((i) => i.productId === item.id);

  return (
    <>
    <div className='border product-card shadow p-3 rounded-lg transition duration-300 cursor-pointer hover:scale-[1.02] hover:bg-red-100'>
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-xl font-semibold'>{item.title}</h1>
          <p className='text-gray-500'>{item.description}</p>
        </div>
        <p className='text-lg font-semibold'>
          {(found?.amount ?? 0) <= 0 ? item.price : (item.price * found?.amount)}€
        </p>
      </div>
      <div className='relative w-[115px] h-[115px] bg-red-200'>
        <img className='rounded-md object-cover w-full h-full' src={item.image} alt={item.title} />
        <button
          onClick={() => handleAdd(item, found)}
          className='absolute end-2 bottom-2 bg-white rounded-full w-8 h-8 grid place-items-center'>
          {found ? (<span>{found.amount}</span>) : (<FaPlus className='text-lg hover:bg-red-100 transition' />)}
        </button>
      </div>
    </div>
   
    </>
  )
}

export default ProductCard;