import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default AppRouter