import './App.css';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Starfield } from './components/Starfield';




function App() {
  return (
    <div>
      <Navbar />
      <Starfield />
      <Contact />
    </div>
  );
}

export default App;
