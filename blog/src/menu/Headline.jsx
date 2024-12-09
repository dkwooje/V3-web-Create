import { useState } from 'react';

export default function Headline() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w3-bar w3-white w3-text-black">
      <h2 className="w3-left w3-tag w3-pale-red w3-round">HAPPY PAWS</h2>
      <a
        href="#Contact"
        className="w3-hide-small w3-bar-item w3-button w3-mobile w3-medium w3-right"
        style={{ marginTop: '10px' }}
      >
        CONTACT
      </a>
      <a
        href="#Activities"
        className="w3-hide-small w3-bar-item w3-button w3-mobile w3-medium w3-right"
        style={{ marginTop: '10px' }}
      >
        ACTIVITIES
      </a>
      <a
        href="#Trainers"
        className="w3-hide-small w3-bar-item w3-button w3-mobile w3-medium w3-right"
        style={{ marginTop: '10px' }}
      >
        TRAINERS
      </a>
      <a
        href="#Home"
        className="w3-hide-small w3-bar-item w3-button w3-mobile w3-medium w3-right"
        style={{ marginTop: '10px' }}
      >
        HOME
      </a>
      <button
        className="w3-bar-item w3-button w3-right w3-hide-medium w3-hide-large"
        style={{ marginTop: '10px' }}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        &#9776;
      </button>

      {isMenuOpen && (
        <div className="w3-bar-block w3-white w3-hide w3-hide-large w3-small">
          <a href="#Home" className="w3-bar-item w3-button">
            HOME
          </a>
          <a href="#Trainers" className="w3-bar-item w3-button">
            TRAINERS
          </a>
          <a href="#Activities" className="w3-bar-item w3-button">
            ACTIVITIES
          </a>
          <a href="#Contact" className="w3-bar-item w3-button">
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
}
