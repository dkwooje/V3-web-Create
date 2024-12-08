import './App.css';
import Footer from './menu/Footer';
import Header from './menu/Header';
import Main from './menu/Main';

function App() {
  return (
    <div>
      <div className="image-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
