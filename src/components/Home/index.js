import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner'
import Header from '../Header'
import Product from '../Product'

const Home = () => {
    const { product } = useSelector((state) => state)
    const token = localStorage.getItem('token')

    useEffect(() => {
        !token && window.location.replace('/login')
    }, [token])

    return (
        <div>
            <Header />
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