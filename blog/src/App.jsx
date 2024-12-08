import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;
