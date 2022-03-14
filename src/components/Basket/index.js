import React from 'react'
import { useSelector } from 'react-redux'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Product from '../Product'
import { Button } from '@mui/material';

import './basket.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const Basket = () => {
  const { savedData } = useSelector(state => state)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className="basket_wrapper">
        <Button onClick={handleNavigate}>
          <KeyboardBackspaceIcon />
        </Button>
        <h1>Savatchaga qo'shilganlar</h1>

        <div className='product_box'>
          {savedData?.map((product) => (
            <Product product={product} key={product._id} isSaved />
          ))}
        </div>
      </div>
    </>
  )
}

export default Basket