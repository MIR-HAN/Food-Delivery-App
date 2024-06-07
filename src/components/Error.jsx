import React from 'react'
import { IoIosWarning } from "react-icons/io";


const Error = ({ message, retry }) => {
  return (
    <>
    <div className='flex gap-5 bg-red-500 p-5 rounded text-white
    my-10'>
      <IoIosWarning className='text-4xl'/>

      <div >
      <h2>Sorry, an error occurred!</h2>
      <p className='font-semibold'>{message} </p> </div>
      </div>

<div className='flex justify-center'>
<button 
onClick={retry}
className='border px-5 py-2 rounded font-semibold 
hover:bg-gray-100'>Try Again</button>
</div>
      
  </>

    
  )
}

export default Error;