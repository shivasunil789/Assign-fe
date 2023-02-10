import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate, useHistory } from "react-router-dom";
import { Home, Hotels } from './components'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/hotels/:id' element={<Hotels />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
