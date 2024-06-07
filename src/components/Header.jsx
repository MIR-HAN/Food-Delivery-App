import React from 'react'
import { BsBasket } from "react-icons/bs";
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className=' shadow'>

  <Container designs={"flex justify-between items-center"} >
  
  
  <Link to={'/'} className='text-red-500 font-[900] text-2xl '>GourmetGo</Link>

  <div className='flex gap-4 items-center'>
    <button className='border border-red-500 py-1 px-3 transition
    rounded text-red-500 hover:bg-red-500 hover:text-white'>Sign in</button>
    <button className='bg-red-500 text-white py-1 px-3
    rounded transition hover:brightness-75'>Sign Up</button>

<Link to={'/card'} className='hover:bg-red-500 hover:bg-opacity-15 rounded-full
transition p-3' >
<BsBasket className='text-red-500 text-xl'  />
</Link>

  </div>

  </Container>
</header>
  )
}

export default Header