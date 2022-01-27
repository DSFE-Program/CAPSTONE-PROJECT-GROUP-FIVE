import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footertech from './components/Footertech';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Footertech/>
        
      </header>
    </div>
  );
}

export default App;
