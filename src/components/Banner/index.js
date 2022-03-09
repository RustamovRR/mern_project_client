import React from 'react'
import bannerImg from '../../images/banner.png'
import BrandImg from '../../images/brand.svg'
import './banner.css'

const Banner = () => {
    return (
        <div className='banner_wrapper'>
            <section className='image'>
                <img src={bannerImg} alt='' />
            </section>

            <section className='brands'>
                {
                    [1, 2, 3, 4, 5].map((item) => (
                        <div key={item}>
                            <img src={BrandImg} alt={`${item}`} />
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Banner