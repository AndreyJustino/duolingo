import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Home from './pages/home/Home.js';
import Lesson1 from './pages/lessons/Lesson1.js';
import Cadastro from './pages/cadastro/Cadastro.js';

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
