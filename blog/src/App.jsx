import './App.css';
import { useState } from 'react';
import Headline from './menu/Headline';
import Header from './menu/Header';
import Trainer from './menu/Trainers';

function App() {
  const [date, setDate] = useState('2024-11-16T20:00');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w3-light-white w3-margin">
      <Headline />
      <div className="w3-content" style={{ maxWidth: '1600px' }}>
        <Header />
        <div className="w3-row-padding" id="Trainers">
          <Trainer onContactClick={scrollToContact} />
        </div>

        <div className="w3-white" id="Activities">
          <div className="w3-container">
            <div className="w3-center w3-padding-32">
              <h2 className="w3-wide">ACTIVITIES</h2>
              <p className="w3-opacity">
                <i>Find the right activity for your dog</i>
              </p>
              <br />
              <p className="w3-left-align w3-white w3-text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pharetra rhoncus suscipit. Integer eget leo pretium, vulputate
                velit sit amet, aliquam est. Pellentesque a malesuada orci, at
                rhoncus enim. Suspendisse at dictum arcu. Etiam tempus varius
                sem, at pretium augue fringilla et. Curabitur tempus
                sollicitudin congue. Aliquam in malesuada eros. Nunc ullamcorper
                sagittis augue a ornare. Aenean faucibus finibus sollicitudin.
                Nullam interdum tellus mauris, et mattis libero accumsan vitae.
                Suspendisse et dui accumsan, lacinia leo in, aliquam felis.
                Aliquam tortor tellus, egestas tristique orci at, rutrum lacinia
                orci.
              </p>
            </div>

            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
              <div className="w3-third">
                <img
                  src="https://images.unsplash.com/photo-1611601303737-6496949997cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Photo by Meritt Thomas"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                ></img>
                <div className="w3-container w3-white">
                  <p>
                    <b>Dog Walking</b>
                  </p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-round w3-pale-red w3-margin-bottom"
                    onClick={() => {
                      setIsModalVisible(true);
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="w3-third">
                <img
                  src="https://images.unsplash.com/photo-1542583387-a3955a8b1d2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Photo by Humphrey Muleba"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                ></img>
                <div className="w3-container w3-white">
                  <p>
                    <b>Dog Training</b>
                  </p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-round w3-pale-red w3-margin-bottom"
                    onClick={() => {
                      setIsModalVisible(true);
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="w3-third">
                <img
                  src="https://images.unsplash.com/photo-1628639423534-a0ee52b9db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Photo by Marcos Ferreira"
                  style={{ width: '100%' }}
                  className="w3-hover-opacity"
                ></img>
                <div className="w3-container w3-white">
                  <p>
                    <b>Dog Haircut</b>
                  </p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-round w3-pale-red w3-margin-bottom"
                    onClick={() => {
                      setIsModalVisible(true);
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w3-white" id="Contact">
          <div className="w3-container w3-padding-32">
            <div className="w3-center w3-padding-32">
              <h2 className="w3-wide">CONTACT</h2>
              <p className="w3-opacity">
                <i>Book now or just send us a message</i>
              </p>
              <br></br>
              <p className="w3-white w3-text-black w3-left-align">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pharetra rhoncus suscipit. Integer eget leo pretium, vulputate
                velit sit amet, aliquam est. Pellentesque a malesuada orci, at
                rhoncus enim. Suspendisse at dictum arcu. Etiam tempus varius
                sem, at pretium augue fringilla et. Curabitur tempus
                sollicitudin congue. Aliquam in malesuada eros. Nunc ullamcorper
                sagittis augue a ornare. Aenean faucibus finibus sollicitudin.
                Nullam interdum tellus mauris, et mattis libero accumsan vitae.
                Suspendisse et dui accumsan, lacinia leo in, aliquam felis.
                Aliquam tortor tellus, egestas tristique orci at, rutrum lacinia
                orci.
              </p>
            </div>
            <form action="/action_page.php" target="_blank">
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="number"
                  placeholder="Service"
                  required
                  name="Service"
                />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="datetime-local"
                  placeholder="Date and time"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Message"
                  required
                  name="Message"
                />
              </p>
              <p>
                <button
                  className="w3-button w3-round w3-pale-red w3-block"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </p>
            </form>
          </div>
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
