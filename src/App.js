import rmLogoColor from './photos/rmLogoColor.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rmLogoColor} className="App-logo" alt="Red Morrow logo" />
        <p>
          Welcome to the beggining of the Red Morrow Website.
        </p>
        <p>Follow us on instagram </p> 
        <a
          className="App-link"
          href="https://www.instagram.com/redmorrowband/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @redmorrowband
        </a>
      </header>
    </div>
  );
}

export default App;
