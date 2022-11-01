import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Work from './components/Work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />  
        <Work /> 
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
