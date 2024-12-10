export default function Header() {
  return (
    <header
      className="bgimg w3-display-container w3-grayscale-min"
      style={{
        backgroundImage:
          "url('https://www.w3schools.com/w3images/coffeehouse.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '75vh',
      }}
      id="home"
    >
      <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag">Open from 6am to 5pm</span>
      </div>
      <div className="w3-display-middle w3-center">
        <span className="w3-text-white" style={{ fontSize: '90px' }}>
          the
          <br />
          Cafe
        </span>
      </div>
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="w3-text-white">15 Adr street, 5015</span>
      </div>
    </header>
  );
}
