import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import Search from '../Search'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css'

const Header = () => {

    const icons = [
        { icon: <PersonIcon />, title: 'Kirish' },
        { icon: <FavoriteIcon />, title: 'Tanlanganlar' },
        { icon: <BarChartIcon />, title: 'Taqqoslash' },
        { icon: <ShoppingCartIcon />, title: 'Savatcha' },
    ]

    const texts = [
        'Марки автомобилей', 'Ходовая часть', 'Моторная часть', 'Запчасти ТО',
        'Кузов и оптика', 'Аккумуляторы', 'Шины', 'Масла и автохимия', 'Автотовары'
    ]

    return (
        <div className='header_root'>
            <section className='top'>
                <div>
                    <Dropdown title="RUS" />
                    <Dropdown title="USD $" />
                </div>
                <ul>
                    <li>Chegirmalar</li>
                    <li>Dostavka</li>
                    <li>Usta xizmati</li>
                    <li>Garantiya</li>
                </ul>
            </section>

            <section className='middle'>
                <div className='search_box'>
                    <Search />
                </div>
                <div className='icons_box'>
                    {icons.map(item => (
                        <div key={item.title} className='icons'>
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className='bottom'>
                {texts.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </section>
        </div>
    )
}

export default Header