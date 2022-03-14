import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getProducts } from './app/action';
import Basket from './components/Basket';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => dispatch(getProducts(data.results)))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
