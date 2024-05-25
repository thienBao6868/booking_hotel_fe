import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../page/LoginPage'
import RegisterPage from '../page/RegisterPage'
import PartnerRegisterPage from '../page/PartnerRegisterPage'
import Navbar from '../components/navbar'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/partner-register' element={<PartnerRegisterPage/>}/>s

    </Routes>
  )
}

export default Router