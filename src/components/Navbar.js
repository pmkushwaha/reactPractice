import React from 'react'
import './Cstyle.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='navbar navbar-expand-lg bg-dark navbar-dark '>

        <li className='navbar-nav me-auto mb-2 mb-lg-0'>
          <ul className='nav-item'>
            <Link to="/" class="nav-link active">Home</Link>
          </ul>
          <ul className='nav-item'> <Link    to="/components/About" class="nav-link active">About</Link></ul>
          <ul className='nav-item  ' >  <Link to="/components/Login" class="nav-link active">Login</Link>   </ul>
          <ul className='nav-item'> <Link to="/components/SignUp" class="nav-link active">Signup</Link>  </ul>

        </li>
 
      </div>
      <Outlet />
    </>
  )
}

export default Navbar