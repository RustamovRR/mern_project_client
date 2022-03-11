import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { saveProduct } from '../../app/action'
import { makeStyles } from '@mui/styles';
import productImg from '../../images/product.png'
import './product.css'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const { savedData } = useSelector(state => state)
    console.log(savedData)

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

    const handleClick = () => {
        dispatch(saveProduct(product))
        // if (savedData.length === 0) {
        //     dispatch(saveProduct(product))
        // } else {
        //     savedData.some((item) => (
        //         item._id !== product._id && dispatch(saveProduct(product))
        //     ))
        // }
    }

    return (
        <div className='product_wrapper'>
            <img src={productImg} alt="" />
            <section>
                <h2>{product.price} сум </h2>
                <h5>{product.discount ? product.discount + 'сум' : `chegirma yo'q`}  </h5>
                <span className='details'>{product.details}</span>
                <Button
                    className={classes.button}
                    onClick={handleClick}
                >
                    Savatchaga qo'shish
                </Button>
            </section>
        </div>
    )
}

export default Product