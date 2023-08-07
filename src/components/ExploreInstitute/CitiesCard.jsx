import React from 'react'
import './CitiesCard.css'
import { ArrowRightOutlined } from '@ant-design/icons';


function CitiesCard() {
    return (
        <div className='citiescard'>
            <div className='citiescard__left'>
                <img src="https://media.istockphoto.com/photos/light-blue-paper-color-with-texture-for-background-picture-id1095286208?k=20&m=1095286208&s=170667a&w=0&h=y8t0xgYtFB40VF0GYgxPm2VBarj8mczl9xkybx3lATw=" alt="citiescard" />
                <div className='citiescard__left__info'>
                    <p className='citiescard__info__title'>Delhi / NCR</p>
                    <p className='citiescard__info__desc'> 20+ Institutes</p>
                </div>
            </div>
            <div className='citiescard__right'>
                <div className='citiescard__button'>
                    <ArrowRightOutlined className='citiescard__button__icon' />
                </div>
            </div>
        </div>
    )
}

export default CitiesCard
