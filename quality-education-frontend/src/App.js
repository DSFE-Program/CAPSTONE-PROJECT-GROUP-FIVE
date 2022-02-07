import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footertech from './components/Footertech';
import Blogs from './components/Blogs';
import Courses from './components/Courses';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sidebar" element={<SideBar />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="courses" element={<Courses />} />
            <Route path="article/:id" element={<BlogDetails />} />
          </Routes>
        </header>
        <Footertech />
      </div>
    </Router>
  );
}

export default App;
