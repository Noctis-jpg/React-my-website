import React from 'react'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const AppRouter = () => {
  return (
    
<BrowserRouter>
  <div>
      <Header></Header>
        <Routes>
          <Route path="/" element= {< HomePage />} exact />
          <Route path="/about" element= {< About />}  />
          <Route path="/portfolio" element= {< Portfolio />}  />
          <Route path="/contact" element= {< Contact />}  />

        </Routes>
  </div>
</BrowserRouter>
    
  )
}
