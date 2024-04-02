import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import List from './components/List/List';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='List' element={<List/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;