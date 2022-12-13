import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <MobileBar />
      <Footer />
    </React.Fragment>
  )
}

export default App
