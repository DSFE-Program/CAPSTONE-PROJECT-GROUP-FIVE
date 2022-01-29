import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Forgot from './components/Forgot';
import './index.css';

function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <div className="content"> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />  
            <Route path="/forgot" element={<Forgot />} />            
          </Routes>
        </div>
     </div> 
    </Router>
   
  );
}

export default App;
