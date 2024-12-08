import './App.css';

function App() {
  return (
    <div>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          className="w3-margin"
          alt="Person"
          style={{
            borderRadius: '50%',
            height: '150px',
            maxWidth: '100%',
          }}
        ></img>

        <div className="w3-margin">
          <p className="w3-large w3-text-black">
            <strong>WELCOME!</strong>
          </p>
          <p className="w3-tag w3-text-white">Check out my photos.</p>
        </div>
        <div class="links-container">
          <a
            href="#"
            className="w3-button w3-hover-blue w3-large w3-yellow"
            style={{ width: '350px', target: '_blank' }}
          >
            Travel
          </a>
          <a
            href="#"
            className="w3-button w3-hover-blue w3-large w3-yellow"
            style={{ width: '350px', target: '_blank' }}
          >
            Experiences
          </a>
          <a
            href="#"
            className="w3-button w3-hover-blue w3-large w3-yellow"
            style={{ width: '350px', target: '_blank' }}
          >
            Creative
          </a>
          <a
            href="#"
            className="w3-button w3-hover-blue w3-large w3-yellow"
            style={{ width: '350px', target: '_blank' }}
          >
            Blog
          </a>

          <div className="w3-container w3-xlarge w3-padding w3-margin">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
