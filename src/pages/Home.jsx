import React from 'react'
import CategoryList from './CategoryList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className=''>
            <div>
                <div>
                   
                </div>
                <ul>
                   <CategoryList/>
                </ul>
                <div className='w-full mt-8 border-b shadow relative  '>
                    <img className='' src="https://static01.nyt.com/images/2012/11/11/magazine/11zara1/11zara1-superJumbo.jpg" alt="" />
                    <div className='absolute top-16 left-8'>
                        
                        <p className='text-white text-xl font-semibold mb-4'>Shop By Category</p>
                        <h2 className='text-3xl mt-5 font-bold text-indigo-300'>New Arrivals</h2>
                        <p className='text-xl mt-4 font-bold text-white'>Welcome To ShopZy</p>
                        <button className='bg-white px-8 py-2 font-semibold mt-10 hover:bg-slate-300 transform transition-transform duration-300 hover:scale-105' >Shop Now</button>


                    </div>

                </div>
            </div>
        </div>
        {/*  */}
        <section>
            
           <h2 className='flex items-center justify-center font-bold mt-4 text-xl border-b shadow'>Featured Products</h2>
       
        </section>
       
    </div>
    <Footer/>
    </>

  )
}

export default Home