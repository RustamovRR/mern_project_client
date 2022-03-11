import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner'
import Product from '../Product'

const Home = () => {
    const { product } = useSelector((state) => state)

    return (
        <div>
            <Banner />
            <div className='products_box'>
                {product.data?.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home