import axios from 'axios'
import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'


function Logout() {
    const navigate = useNavigate()
useEffect(()=> {
    axios.get(`${import.meta.env.VITE_BASE_URL}/auth/logout`,{withCredentials:true})
    .then(res =>{
        console.log(res)
        navigate('/login')

    })
    .catch(error =>{
        console.log(error)
    })

},[])
  return (
    <div>
        Logging out ...

    </div>
  )
}

export default Logout