import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";


const RestaurantDetail = ({ data }) => {
    return (
        <div className='flex gap-5'>
            <img src={data.image} className='w-[150px] max-md:w-[100px] rounded-md' alt="" />

            <div className='flex flex-col justify-between'>
                <p className='flex gap-3'>
                    <span className='flex items-center'>
                        <FaArrowDownLong className='text-red-500' />
                        min. {data.minOrderPrice}€</span>
                    <span className='flex gap-2 items-center'><LuClock5 className='text-red-500' />


                        {data.estimatedDelivery}mn</span>
                </p>

                <h1 className='text-3xl max-md:text-2xl semi-bold'>{data.name}</h1>
                <p className='flex items-center gap-2'>
                    <FaStar className='text-red-500' />{data.rating}
                    <a className='text-red-500 font-semibold p-1 hover:bg-red-100 rounded' >See the comments</a>
                </p>

            </div>
        </div>
    )
}

export default RestaurantDetail;