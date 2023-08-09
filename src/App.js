import React from "react"
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Shop from './pages/Shop/Shop'
import Product from './components/Product/Product'

const App = () => {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App