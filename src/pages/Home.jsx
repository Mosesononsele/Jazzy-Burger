import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'


const Home = () => {
    useEffect(()=> {
        document.title = "Home | Page"
    })
  return (
   <>
   <main className='container'>
   <Hero/>
   <Products/>
   
   </main>
   </>
  )
}

export default Home