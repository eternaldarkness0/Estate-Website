"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const RespNavbar = () => {

  const [activeNav, setActiveNav] = useState(false);
  const open = () => setActiveNav(true);
  const close = () => setActiveNav(false);

  return (
    <div>
        <Navbar openNav={open}/>
        <MobileNavbar activeNav={activeNav} closeNav={close}/>
    </div>
  )
}

export default RespNavbar