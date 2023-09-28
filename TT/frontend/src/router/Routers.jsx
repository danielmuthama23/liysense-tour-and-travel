import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Tours from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Register from '../pages/Register';
import Login from '../pages/Login';
import SearchResultList from '../pages/SearchResultList';
import Home from '../pages/Home';


const Routers = () => {
  return (
    <Routes>
        {<Route path='/home' element={<Navigate to='/home'/>}/> }
        <Route path='/home' element={<Home/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<Login/>} />
        <Route path='/tours/search' element={<SearchResultList/>} />
        {/* { <Route path='/about' element={<Navigate to=' /about'/>}/> } */}
    </Routes>
  )
}

export default Routers