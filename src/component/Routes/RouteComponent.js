import React from 'react'
import Login from '../Login'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Companies from '../Pages/Companies'
import ShowAllPersons from '../Pages/ShowAllPersons'
import Profile from '../Pages/Profile'

const RouteComponent = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Login/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/companies' element={<Companies/>} />
           <Route path='/showAllPersons' element={<ShowAllPersons/>} />
           <Route path='profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default RouteComponent
