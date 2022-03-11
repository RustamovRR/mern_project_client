import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import Search from '../Search'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css'
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { savedData } = useSelector(state => state)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/basket')
    }

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
                    <div className='icons'>
                        <span><PersonIcon /></span>
                        <span>Kirish</span>
                    </div>
                    <div className='icons'>
                        <span><FavoriteIcon /></span>
                        <span>Tanlanganlar</span>
                    </div>
                    <div className='icons'>
                        <span><BarChartIcon /></span>
                        <span>Taqqoslash</span>
                    </div>
                    <Badge badgeContent={savedData.length || '0'} color="primary" >
                        <div className='icons basket' onClick={handleNavigate}>
                            <span><ShoppingCartIcon /></span>
                            <span>Savatcha</span>
                        </div>
                    </Badge>
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