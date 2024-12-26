import './App.css';
// import Header from './componentes/Header/index';
// import Banner from './componentes/Banner/index';
// import Footer from './componentes/Footer';
// import Equipo from './componentes/Equipo';
import Nuevovideo from './pages/nuevovideo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/nuevovideo' element={<Nuevovideo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
