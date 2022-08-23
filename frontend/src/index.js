import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './layout/navBar'
import Footer from './layout/footer'
import Login from './pages/login'
import Products from './pages/products'
import Terms from './pages/terms'
import Refund from './pages/refundPolicy'
import About from './pages/aboutUs'
import FindMatch from './pages/findMatch'
import Accessories from './pages/accessories'
import ProductDescription from './pages/product-description'



const Routing = () => {
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact="true" path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products-description" element={<ProductDescription/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/plant-care" element={<About/>} />
        <Route path="/find-my-match" element={<FindMatch/>} />
      
      </Routes>
      <Footer/>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
