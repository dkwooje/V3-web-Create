import './App.css';
import { useRef } from 'react';
import Headline from './menu/Headline';
import Header from './menu/Header';
import Trainer from './menu/Trainers';
import Active from './menu/Active';
import Contact from './menu/Contact';
import Footer from './menu/Footer';

export const useScrollTo = () => {
  const ref = useRef(null);

  const scrollToElement = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return [ref, scrollToElement];
};

function App() {
  const [contactRef, scrollToContact] = useScrollTo();

  return (
    <div className="w3-light-white w3-margin">
      <Headline />
      <div className="w3-content" style={{ maxWidth: '1600px' }}>
        <Header />
        <div className="w3-row-padding" id="Trainers">
          <Trainer onClick={scrollToContact} />
        </div>
        <div className="w3-white" id="Activities">
          <Active />
        </div>
        <div className="w3-white" id="Contact" ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
