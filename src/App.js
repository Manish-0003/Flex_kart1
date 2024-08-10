import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Product from './components/Product';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import SearchItme from './components/SearchItme';
import Cart from './components/Cart';
import { items } from './assets/Data';


const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (

    <div>
      <Router>
        <Navbar setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchItme />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App;