import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';
import Cadastro from './pages/Cadastro.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
