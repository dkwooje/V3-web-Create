import React, { useState } from 'react';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '' });

  const w3Open = () => setSidebarVisible(true);
  const w3Close = () => setSidebarVisible(false);
  const showModal = (src, alt) => {
    setModalImage({ src, alt });
    setModalVisible(true);
  };
  const hideModal = () => setModalVisible(false);

  return (
    <div className="w3-light-grey w3-content" style={{ maxWidth: '1600px' }}>
      {/* Sidebar/menu */}
      {sidebarVisible && (
        <div>
          <nav
            className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center"
            style={{ zIndex: 3, width: '300px', fontWeight: 'bold' }}
          >
            <h3 className="w3-padding-64 w3-center">
              <b>
                SOME
                <br />
                NAME
              </b>
            </h3>
            <button
              onClick={w3Close}
              className="w3-bar-item w3-button w3-padding w3-hide-large"
            >
              CLOSE
            </button>
            <a
              href="#portfolio"
              onClick={w3Close}
              className="w3-bar-item w3-button"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              onClick={w3Close}
              className="w3-bar-item w3-button"
            >
              ABOUT ME
            </a>
            <a
              href="#contact"
              onClick={w3Close}
              className="w3-bar-item w3-button"
            >
              CONTACT
            </a>
          </nav>
          <div
            className="w3-overlay w3-hide-large w3-animate-opacity"
            onClick={w3Close}
            style={{ cursor: 'pointer' }}
            title="close side menu"
          />
        </div>
      )}

      {/* Top menu on small screens */}
      <header className="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
        <span className="w3-left w3-padding">SOME NAME</span>
        <button className="w3-right w3-button w3-white" onClick={w3Open}>
          ☰
        </button>
      </header>

      {/* Page Content */}
      <div className="w3-main" style={{ marginLeft: '300px' }}>
        <div className="w3-hide-large" style={{ marginTop: '83px' }}></div>

        {/* Photo Grid */}
        <div className="w3-row">
          {[
            'natureboy.jpg',
            'girl_mountain.jpg',
            'girl.jpg',
            'boy.jpg',
            'man_bench.jpg',
            'closegirl.jpg',
          ].map((src, index) => (
            <div className="w3-third" key={index}>
              <img
                src={`https://www.w3schools.com/w3images/${src}`}
                style={{ width: '100%' }}
                onClick={() =>
                  showModal(
                    `https://www.w3schools.com/w3images/${src}`,
                    `Image ${index + 1}`
                  )
                }
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalVisible && (
          <div
            id="modal01"
            className="w3-modal w3-black"
            style={{ paddingTop: 0 }}
            onClick={hideModal}
          >
            <span className="w3-button w3-black w3-xlarge w3-display-topright">
              ×
            </span>
            <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
              <img
                id="img01"
                className="w3-image"
                src={modalImage.src}
                alt={modalImage.alt}
              />
              <p id="caption">{modalImage.alt}</p>
            </div>
          </div>
        )}

        {/* About Section */}
        <div
          className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32"
          id="about"
        >
          <h4>
            <b>About Me</b>
          </h4>
          <p>Some description here...</p>
        </div>

        {/* Contact Section */}
        <div
          className="w3-container w3-light-grey w3-padding-32 w3-padding-large"
          id="contact"
        >
          <h4 className="w3-center">
            <b>Contact Me</b>
          </h4>
          <form>
            <div className="w3-section">
              <label>Name</label>
              <input className="w3-input w3-border" type="text" required />
            </div>
            <button
              type="submit"
              className="w3-button w3-block w3-black w3-margin-bottom"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
