import React from 'react'
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from 'react-router-dom';



const RestaurantCards = ({ data }) => {
    return (
        <Link to={`/restaurants/${data.id}`} className='shadow rounded-lg overflow-hidden hover:bg-gray-100
        cursor-pointer hover:shadow-lg'>
            <img className='w-full object-contain' src={data.image} alt={data.name} />

            <div className='p-3'>
                <div className='flex justify-between '>
                    <h3 className='text-xl font-semibold'>{data.name}</h3>

                    <p className='flex items-center gap-2'>
                        <FaStar className='text-red-500' />
                        {data.rating}</p>
                </div>
                <p className='text-sm my-2 flex gap-4 text-gray-500'>
                    <span>{data.minOrderPrice}€ minumum</span>
                    <span>category</span>
                </p>
                <div className='flex gap-5'>
                    <p className='flex items-center gap-2 text-sm font-semibold'>
                        <i><FiClock /></i>
                        <span>{data.estimatedDelivery} min</span>
                    </p>

                    {data.isDeliveryFree && <p className='
                    flex items-center gap-2 text-red-500 font-bold text-sm'> <MdOutlineDeliveryDining className='text-xl' />
                        Free Delivery</p>}
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCards;