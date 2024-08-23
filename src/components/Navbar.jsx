import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'

const Navbar = () => {
   const [isModelOpen, setIsModelOpen] = useState(false)
   const [isLogin,setIsLogin] = useState(true)

   const openSignUp = () => {
    setIsLogin(false)
    setIsModelOpen(true)

   }
   const openLogin = () => {
    setIsLogin(true)
    setIsModelOpen(true)

   }
   

  const items = useSelector(state=>state.cart.items)
  
  const noOfItems = items.reduce((total,item)=>{
    return total+item.quantity
  },0)
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to={'/'}>ShopZy</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form>
                    <input type="text" placeholder='Search Product' className='w-full rounded py-2 px-4' />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center  space-x-4'>
            <Link to={'/cart'} className='relative'>
                <FaShoppingCart className='text-lg' />
                <span className='text-xs font-bold flex flex-row items-center justify-center w-4 h-4 bg-red-800 text-white rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/3'>{noOfItems} </span>
                
                </Link>
                <button className='hidden md:block'
                onClick={() => setIsModelOpen(true)}>
                    Login | Register
                </button>
                <button className='block md:hidden'>
                    <FaUser/>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 py-4 font-bold'>
            <Link to={'/'} className='hover:underline'>
            Home
            </Link>
           
            <Link className='hover:underline'>
            Contact
            </Link>
            <Link className='hover:underline'>
            About
            </Link>
        </div>
       <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
       </Modal>

    </nav>
  )
}

export default Navbar