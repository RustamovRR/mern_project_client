import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => setProducts(data.results))
  })

  return (
    <div className="App">
      <Header />
      <Banner />

      <div className='products_box'>
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
