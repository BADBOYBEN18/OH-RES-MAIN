// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/About'; // or './Home' depending on your file structure
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Itsm from './pages/Itsm';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/itsm" element={<Itsm />} />
      </Routes>
    </Router>
  );
}

export default App;
