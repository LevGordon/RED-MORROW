import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Routes from './Routes';



function App() {
  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
