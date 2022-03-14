import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { deletedProducts, saveProduct } from '../../app/action'
import { makeStyles } from '@mui/styles';
import productImg from '../../images/product.png'
import './product.css'

const Product = ({ product, isSaved }) => {
    const dispatch = useDispatch()
    const { savedData, deletedData } = useSelector(state => state)

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

    const handleAdd = () => {
        dispatch(saveProduct(product))
    }

    const handleDelete = () => {
        let deletedItems = []
        savedData?.map(item => {
            if (item._id == product._id) {
                deletedItems.push(item)
            }
        })
        dispatch(deletedProducts(deletedItems))
    }

    return (
        <div className='product_wrapper'>
            <img src={productImg} alt="" />
            <section>
                <h2>{product.price} сум </h2>
                <h5>{product.discount ? product.discount + 'сум' : `chegirma yo'q`}  </h5>
                <span className='details'>{product.details}</span>
                {!isSaved && (
                    <Button
                        className={classes.button}
                        onClick={handleAdd}
                    >
                        Savatchaga qo'shish
                    </Button>
                )}

                {isSaved && (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                    >
                        O'chirish
                    </Button>
                )}
            </section>
        </div>
    )
}

export default Product