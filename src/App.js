import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { getProducts } from './app/action';
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './components/Home';

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
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
