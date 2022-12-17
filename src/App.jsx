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
import ReactGA from 'react-ga';

ReactGA.initialize('UA-252410356-1');

const App = () => {

  const {
    theme,
    handleTheme
  } = useInitialState();

  return (
    <React.Fragment>
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
