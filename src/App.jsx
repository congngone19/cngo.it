import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Nav from './component/nav'
import Signup from './component/signup';
import Home from './component/home';
import Contact from './component/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
