
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivetRouts from './components/PrivetRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivetRouts />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>Home</h1>} />
        <Route path='/logout' element={<h1>Home</h1>} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
