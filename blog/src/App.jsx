import './App.css';
import { useState, useRef } from 'react';
import Headline from './menu/Headline';
import Header from './menu/Header';
import Trainer from './menu/Trainers';
import Active from './menu/Active';
import Contact from './menu/Contact';

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

        <footer className="w3-container w3-pale-red w3-center w3-margin-top">
          <p>Find us on social media.</p>
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-small">
            This website was made with W3schools Spaces. Make your own free
            website today!
          </p>
          <a
            className="w3-button w3-round-xxlarge w3-small w3-white w3-margin-bottom"
            href="https://www.w3schools.com/spaces"
            target="_blank"
          >
            Start now
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
