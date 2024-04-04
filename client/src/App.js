import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import List from './components/pages/List/List';
import CreateTask from './components/pages/CreateTask/CreateTask';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path='Home' element={<Home/>}/>
          <Route path='List' element={<List/>}/>
          <Route path='CreateTask' element={<CreateTask/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;