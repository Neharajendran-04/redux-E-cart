import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Wishlist from './Pages/Wishlist'
import Pnf from './Pages/Pnf'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import View from './Pages/View'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
        <Route path='/' element = {<Products />}/>
        <Route path = '/products/:id' element = {<View/>} />
        <Route path = '/wishlist'  element = {<Wishlist/>}/>
        <Route path ='/cart' element = {<Cart />} />
        <Route path ='/*' element = {<Pnf />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
