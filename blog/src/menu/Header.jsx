export default function Header() {
  return (
    <header
      className="w3-display-container w3-wide"
      style={{ paddingBottom: '32px' }}
      id="Home"
    >
      <img
        className="w3-image"
        src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt="Photo by Jamie Street"
        style={{ width: '1600', height: '1060' }}
      ></img>

      <div className="w3-display-left w3-padding-large">
        <h1 className="w3-text-white">DOG CARETAKERS</h1>
        <h1 className="w3-jumbo w3-text-white w3-hide-small">
          <b>NEW FOUNDLAND</b>
        </h1>
        <h6>
          <button
            className="w3-button w3-round w3-pale-red w3-padding-large w3-large w3-hover-opacity-off"
            onClick={() => (window.location.href = '#Contact')}
          >
            BOOK NOW
          </button>
        </h6>
      </div>
    </header>
  );
}
