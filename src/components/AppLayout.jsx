import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
function AppLayout({data}) {
  return (
    <>
<Navbar data={data}/>
<Outlet/>

    </>
  )
}

export default AppLayout