import React from 'react'
// import Navbar from './NAvbar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return <>
  <Navbar/>
  <Outlet/>
  </>
}

export default Layout