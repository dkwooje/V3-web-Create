export default function Nav() {
    const w3Close = () => {
        console.log("Sidebar closed");
        // Add your logic here for closing the sidebar
    };

    return (
        <nav
            className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center"
            style={{ zIndex: 3, width: "300px", fontWeight: "bold" }}
            id="mySidebar"
        >
            <br />
            <h3 className="w3-padding-64 w3-center">
                <b>SOME<br />NAME</b>
            </h3>
            <button
                onClick={w3Close}
                className="w3-bar-item w3-button w3-padding w3-hide-large"
            >
                CLOSE
            </button>
            <a href="#" onClick={w3Close} className="w3-bar-item w3-button">
                PORTFOLIO
            </a>
            <a href="#about" onClick={w3Close} className="w3-bar-item w3-button">
                ABOUT ME
            </a>
            <a href="#contact" onClick={w3Close} className="w3-bar-item w3-button">
                CONTACT
            </a>
        </nav>
    );
}