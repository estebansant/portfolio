import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar';
import { useInitialState } from './useInitialState.js';
import { Helmet } from "react-helmet";

const App = () => {

  const {
    theme,
    handleTheme
  } = useInitialState();

  return (
    <React.Fragment>
      <Helmet>
        <title>Esteban Santiago | Portfolio</title>
        <meta name="description" content="Personal portfolio of Esteban Santiago. Here you will be able to see all the projects that I have done as a programmer."/>
      </Helmet>
      <Header 
        theme={theme}
        handleTheme={handleTheme}
      />
      <Home />
      <About />
      <Skills />
      <Portfolio 
        theme={theme}
      />
      <Experience />
      <Contact />
      <MobileBar 
        theme={theme}
        handleTheme={handleTheme}
      />
      <Footer 
        theme={theme}
      />
    </React.Fragment>
  )
}

export default App
