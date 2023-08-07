import React from 'react'
import './WhatOurStudent.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import QuoteIcon from '../../assests/icons/quote.png'

function WhatOurStudent() {
    return (
        <div className='whatourstudent'>
            <ComponentTitle title="What Our Students Say About Us" subTitle="Students Review" />
            <div className='whatourstudent__container'>
                <div className='whatourstudent__container__card'>
                    <img src={QuoteIcon} alt="quoteicon" />
                    <p className='whatourstudent__container__card__title'>It was really a great experience.. Thanks to all the Educators and also to the backend team for making this process smooth and quick.</p>
                    <p className='whatourstudent__container__card__desc'>Guest user</p>
                </div>
                <div className='whatourstudent__container__card'>
                    <img src={QuoteIcon} alt="quoteicon" />
                    <p className='whatourstudent__container__card__title'>It was really a great experience.. Thanks to all the Educators and also to the backend team for making this process smooth and quick.</p>
                    <p className='whatourstudent__container__card__desc'>Guest User</p>
                </div>
                <div className='whatourstudent__container__card'>
                    <img src={QuoteIcon} alt="quoteicon" />
                    <p className='whatourstudent__container__card__title'>It was really a great experience.. Thanks to all the Educators and also to the backend team for making this process smooth and quick.</p>
                    <p className='whatourstudent__container__card__desc'>Guest user</p>
                </div>
                
            </div>
        </div>
    )
}

export default WhatOurStudent
