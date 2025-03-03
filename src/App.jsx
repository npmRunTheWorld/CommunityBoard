import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import FunActivity from './pages/FunActivity';
import Events from './pages/Events';
import Food from './pages/Food';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <main className='mx-auto min-h-screen bg-blue-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/:id" element={<Food />} />
          <Route path="/fun-activity" element={<FunActivity />} />
          <Route path="/fun-activity/:id" element={<FunActivity />} />
          <Route path="/event" element={<Events />} />
          <Route path="/event/:id" element={<Events />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
