import './App.css';
import Top from './menu/Top';
import Header from './menu/Header';
import About from './menu/About';
import Manu from './menu/Manu';
import Footer from './menu/Footer';
import Where from './menu/Where';

function App() {
  return (
    <div className="body">
      <Top />
      <Header />

      <div className="w3-sand w3-grayscale w3-large">
        <About />
        <Manu />
        <Where />
      </div>
      <Footer />
    </div>
  );
}

export default App;
