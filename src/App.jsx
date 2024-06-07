
import React, { useEffect } from 'react'
import Card from './pages/Card'
import Main from './pages/Main'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
import { useDispatch } from 'react-redux'
import { getCard } from './redux/actions/basketAction'


const App = () => {

  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getCard())
  },[])


  return (

 <  BrowserRouter>

 <Header/>
 <Routes>

<Route  path='/' element={<Main/>}/>
<Route path='/restaurants/:id' element={<Restaurant/>}/>
<Route path='/card' element={<Card/>}/>

 </Routes>
 </BrowserRouter>
  )
}

export default App