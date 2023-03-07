import React from 'react'
import Home from './Screens/Home/Home'
import ProductDetails from './Screens/ProductDetails/ProductDetails'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProduct from './Screens/AllProduct/AllProduct';
import Footer from './MiniComp/Footer/Footer';
import About from './MiniComp/About/About';



function App () {
  

  return (
    <>
        <Router>
        <Routes>
         
          <Route exact path="/" element={<Home />} />

          <Route path='/productDetails/:id' element={<ProductDetails/>} />
          
          <Route path='/allProduct' element={<AllProduct/>} />
          <Route exact path="/About" element={<About />} />
        </Routes>
       
       <Footer/>

      </Router>
    </>
  )
}

export default App;


