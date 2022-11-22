import { Outlet } from 'react-router-dom'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLoggedIn } from './Auth'

const Privateroute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"}/>
}

export default Privateroute