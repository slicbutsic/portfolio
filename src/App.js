import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { Hero } from './components/hero/Hero';
import { Contact } from './components/contact/Contact';
import { Projects } from './components/projects/Projects';
import { Navbar } from './components/navbar/Navbar';
import { Space } from './components/space/Space';
import { About } from './components/about/About';
import Parallax from './components/mountains/Mountains';


function App() {
  return (
    <NextUIProvider>
      <div>
        <Navbar />
        <Hero />
        <Space />
        <section id="Services">
          <Parallax type="services" />
        </section>
        <Projects />
        <About />
        <Contact />
      </div>
    </NextUIProvider>
  );
}

export default App;
