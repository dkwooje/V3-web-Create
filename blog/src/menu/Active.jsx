import { useState } from 'react';

export default function Active() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="w3-container">
      <div className="w3-center w3-padding-32">
        <h2 className="w3-wide">ACTIVITIES</h2>
        <p className="w3-opacity">
          <i>Find the right activity for your dog</i>
        </p>
        <br />
        <p className="w3-left-align w3-white w3-text-black">
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
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
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
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
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
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
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
  );
}
