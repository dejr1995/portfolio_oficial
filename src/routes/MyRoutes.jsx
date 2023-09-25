import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Iam from '../components/Iam';
import Gallery from '../components/Gallery';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/person' element={<Iam/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default MyRoutes;