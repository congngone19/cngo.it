import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';
import Contact from './component/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
