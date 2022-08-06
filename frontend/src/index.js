import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '/Users/shiracohen/Desktop/planty/frontend/src/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './layout/navBar'
import Footer from './layout/footer'
import Login from './components/login'
import Products from './components/products'
import Terms from './pages/terms'
import Refund from './pages/refundPolicy'
import About from './pages/aboutUs'

const Routing = () => {
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact="true" path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/about" element={<About/>} />
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
