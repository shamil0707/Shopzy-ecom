import React from 'react'
// import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Root(props) {
  return (
    <>
    
    <Navbar/>
    <Outlet />
  
    </>
  );
}

export default Root;