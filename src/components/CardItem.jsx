import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../redux/actions/basketAction';
import { Link } from 'react-router-dom';



const CardItem = ({ item }) => {

    const dispatch = useDispatch();



    const handleIncrease = () => {
        dispatch(updateItem(item.id, item.amount + 1));
    };
    const handleDecrease = () => {
        item.amount > 1 ?
            dispatch(updateItem(item.id, item.amount - 1)) :
            dispatch(deleteItem(item.id))
    };

    return (
        <>
            <div className='border flex gap-4 mb-10 rounded-lg p-4'>
                <img className='w-[115px] rounded-lg' src={item.image} alt="" />
                <div className='w-full flex flex-col justify-between'>
                    <h3 className='text-xl font-semibold'>{item.title}</h3>
                    <p className='text-gray-500'>{item.restaurantName}</p>

                    <div className='flex justify-between'>
                        <p className='font-semibold'>€{item.price * item.amount}</p>

                        <div className='border rounded-lg text-lg'>
                            <button onClick={handleDecrease} className='p-3 text-red-500  rounded-xl hover:bg-red-100 transition'>
                                {item.amount > 1 ? <FaMinus /> : <FaRegTrashCan />}</button>
                            <span className='p-3'>{item.amount}</span>
                            <button onClick={handleIncrease} className='p-3 text-red-500 rounded-xl hover:bg-red-100 transition'>
                                <FaPlus /></button>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default CardItem;