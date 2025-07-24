import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import ServiceLayout from './layout/ServiceLayout.jsx';
import WebDesign from './Pages/Services/WebDesign.jsx';
import WebDevelopment from './Pages/Services/WebDevelopment.jsx';
import NotFound from './Pages/NotFound.jsx';
import JobLayout from './layout/JobLayout.jsx';
import JobDetails from './components/job/JobDetails.jsx';
import Jobs from './Pages/Jobs/Jobs.jsx';

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path='product' element={<Product />} />
        <Route path='about'  element={<About />} />
        <Route path='contact' element={<Contact />} />
        
        {/* ✅ Nest service-related routes under 'services' */}
        <Route path='services' element={<ServiceLayout />}>
          <Route index element={<p>Please select a service.</p>} />
          <Route path='web-design' element={<WebDesign />} />
          <Route path='web-development' element={<WebDevelopment />} />
        </Route>
        
        {/* Nest Jobs routes under 'jobs' */}
        <Route path='jobs' >
          <Route index element={<Jobs />} />
          <Route path=':id' element={<JobDetails />}/>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>


    )
  )
    
    
    return (
      <RouterProvider router={router} />
    )
}


