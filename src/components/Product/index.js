import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import productImg from '../../images/product.png'
import './product.css'

const Product = ({ data }) => {
    const useStyles = makeStyles({
        button: {
            color: "#fff",
            background: '#FCA120',
            borderRadius: '4px',

            '&:hover': {
                color: "#fff",
                background: '#FCA120',
                borderRadius: '4px',
            }
        }
    });
    const classes = useStyles()

    return (
        <div className='product_wrapper'>
            <img src={productImg} alt="" />
            <section>
                <h2>{data.price} сум </h2>
                <h5>{data.discount ? data.discount + 'сум' : `chegirma yo'q`}  </h5>
                <span className='details'>{data.details}</span>
                <Button className={classes.button}>Savatchaga qo'shish</Button>
            </section>
        </div>
    )
}

export default Product