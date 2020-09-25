import React from 'react';
import './App.css';

import Home from './components/Home1';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Work from './components/work';
import Hire from './components/Hire';
import Navbar from './components/Navbar'
import Footer from './components/Foooter'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Home">
      <Home></Home>
      </div>
      <div className='About'>
        <About></About>
      </div>
      <div className='Service'>
        <Service></Service>
      </div>
      <div className='Works'>
        <Work></Work>
      </div>
      <div className='Skills'>
        <Skills></Skills>
      </div>
      <div className='Testimonials'>
        <Testimonials></Testimonials>
      </div>
      <div className='Hire'>
        <Hire></Hire>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
