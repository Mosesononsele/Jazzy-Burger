import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import NavBar from './layouts/Navbar'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Error from './pages/Error'



function App() {
  const [cartItem,setCartItem] = useState([1])

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route element={<> <Navbar cartItem = {cartItem}/> <Footer/></>}>

      <Route path='/' element={<Home/>}/>
      <Route path='/CheckOut' element={<CheckOut/>}/>

      </Route>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path="*" element={<Error/>}/>


     </Routes>
     
     </BrowserRouter>
     
     
     
    </>
  )
}

export default App
