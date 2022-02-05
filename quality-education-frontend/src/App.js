import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Forgot from './components/Forgot';
import './index.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Footertech from './components/Footertech';


function App() {
  return (
    <Router>
     <div className="App">
     <header className="App-header">
        <Navbar />
        </header>
        <div className="content"> 
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  
            <Route path="/forgot" element={<Forgot />} />            
          </Routes>
        </div>
        <div className='App-footer'>
        <Footertech />
        </div>
     </div> 
    </Router>
   
  );
}

export default App;
