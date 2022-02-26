import './App.css';
import Navbar from './Components/Navbar';
import Microsoft from './Components/Microsoft';
import Footertech from './Components/Footertech'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgot from './Components/Forgot';
import './index.css';
import LandingPage from './pages/LandingPage';
import Blogs from './Components/Blogs';
import BlogDetails from './Components/BlogDetails';
import SideBar from './Components/SideBar';


function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
       <Navbar />
       </header>

       <div className="content"> 
         <Routes>
           <Route path="LandingPage" element={<LandingPage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />  
           <Route path="/forgot" element={<Forgot />} /> 
           <Route path="/Microsoft" element={<Microsoft />} />   
           <Route path="sidebar" element={<SideBar />} />
            <Route path="Blogs" element={<Blogs />} />
            
            <Route path="article/:id" element={<BlogDetails />} />         
         </Routes>
       </div>
        </div> 
        
    <div className='App-footer'>
      <footer>
       <Footertech />
       </footer>
       </div>
   
   </Router>
    

    
);
}

export default App;
