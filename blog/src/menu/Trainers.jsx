export default function Trainer({ onContactClick }) {
  return (
    <div className="w3-center w3-padding-32">
      <h2 className="w3-wide w3-center">TRAINERS</h2>
      <p className="w3-opacity w3-center">
        <i>The caretakers</i>
      </p>
      <br />
      <p className="w3-white w3-text-black w3-left-align">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra
        rhoncus suscipit. Integer eget leo pretium, vulputate velit sit amet,
        aliquam est. Pellentesque a malesuada orci, at rhoncus enim. Suspendisse
        at dictum arcu. Etiam tempus varius sem, at pretium augue fringilla et.
        Curabitur tempus sollicitudin congue. Aliquam in malesuada eros. Nunc
        ullamcorper sagittis augue a ornare. Aenean faucibus finibus
        sollicitudin. Nullam interdum tellus mauris, et mattis libero accumsan
        vitae. Suspendisse et dui accumsan, lacinia leo in, aliquam felis.
        Aliquam tortor tellus, egestas tristique orci at, rutrum lacinia orci.
      </p>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img
            src="https://images.unsplash.com/photo-1506993708131-b0bf29d16b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            alt="Photo by Sam manns"
            style={{ width: '100%' }}
          ></img>
          <div className="w3-container">
            <h3>Jane Cormick</h3>
            <p className="w3-opacity">CEO & Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button
                className="w3-button w3-round w3-pale-red w3-block"
                onClick={onContactClick}
              >
                NOW
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img
            src="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Photo by Manuel Meza"
            style={{ width: '100%' }}
          ></img>
          <div className="w3-container">
            <h3>Kristen Arnheim</h3>
            <p className="w3-opacity">Dog Walker & Trainer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button
                className="w3-button w3-round w3-pale-red w3-block"
                onClick={onContactClick}
              >
                BOOK NOW
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img
            src="https://images.unsplash.com/photo-1539440860461-f30442bf7ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Photo by Wieger Stienstra"
            style={{ width: '100%' }}
          ></img>
          <div className="w3-container">
            <h3>Ola Truntwistle</h3>
            <p className="w3-opacity">Dog Trainer & Hairdresser</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button
                className="w3-button w3-round w3-pale-red w3-block"
                onClick={onContactClick}
              >
                BOOK NOW
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
