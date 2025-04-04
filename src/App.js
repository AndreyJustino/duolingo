import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Lesson1 from './components/Lesson1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
