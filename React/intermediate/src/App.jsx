import { Routes, Route, useRoutes }  from 'react-router-dom';
import React, { useState , useEffect} from 'react'
import './App.css'

;
import Nav from './components/Nav/nav.jsx';
// pages 
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

  function App() {

    const AppRoutes = () => {
      return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/product', element: <Product />},
        { path: '/about', element: <About />},
        { path: '/contact', element: <Contact />}
      ]);
    }

    
    
    return (
      <div>
        {/* navbar */}
        <Nav />
        <AppRoutes />
        
      {/* end navbar */}

          
      </div>

    )
  }

export default App
