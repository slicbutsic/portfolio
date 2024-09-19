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
    <div>
      <Navbar />
      <Hero />
      <Space />
      <About />
      <section id="Services">
        <Parallax type="services" />
      </section>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
