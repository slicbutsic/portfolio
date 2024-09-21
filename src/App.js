import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import { Hero } from './components/hero/Hero';
import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Space } from './components/space/Space';
import Parallax from './components/mountains/Mountains';

function App() {
  return (
    <NextUIProvider>
      <div>
        <Sidebar />
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
