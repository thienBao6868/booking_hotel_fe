import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../page/LoginPage'
import RegisterPage from '../page/RegisterPage'
import PartnerRegisterPage from '../page/PartnerRegisterPage'
import Navbar from '../components/navbar'
import NotFoundPage from '../page/NotFoundPage'
import SearchPage from '../page/SearchPage'
import HotelDetail from '../page/HotelDetail'
import UserDetail from '../page/UserDetail'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/partner-register' element={<PartnerRegisterPage/>}/>
        <Route path='/search-hotel' element={<SearchPage/>}/>
        <Route path='/hotel-detail' element={<HotelDetail/>}/>
        <Route path='/user-detail' element={<UserDetail/>}/>

        <Route path='/404' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default Router