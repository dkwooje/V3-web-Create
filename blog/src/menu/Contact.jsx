import { useState } from 'react';

export default function Contact() {
  const [date, setDate] = useState('2024-11-16T20:00');

  return (
    <div className="w3-container w3-padding-32">
      <div className="w3-center w3-padding-32">
        <h2 className="w3-wide">CONTACT</h2>
        <p className="w3-opacity">
          <i>Book now or just send us a message</i>
        </p>
        <br></br>
        <p className="w3-white w3-text-black w3-left-align">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra rhoncus suscipit. Integer eget leo pretium, vulputate velit
          sit amet, aliquam est. Pellentesque a malesuada orci, at rhoncus enim.
          Suspendisse at dictum arcu. Etiam tempus varius sem, at pretium augue
          fringilla et. Curabitur tempus sollicitudin congue. Aliquam in
          malesuada eros. Nunc ullamcorper sagittis augue a ornare. Aenean
          faucibus finibus sollicitudin. Nullam interdum tellus mauris, et
          mattis libero accumsan vitae. Suspendisse et dui accumsan, lacinia leo
          in, aliquam felis. Aliquam tortor tellus, egestas tristique orci at,
          rutrum lacinia orci.
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
  );
}
