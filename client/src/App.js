import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import List from './components/pages/List/List';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path='Home' element={<Home/>}/>
          <Route path='List' element={<List/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;