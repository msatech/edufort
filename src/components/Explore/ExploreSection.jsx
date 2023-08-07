import React from 'react'
import './ExploreSection.css'
import { ArrowRightOutlined } from '@ant-design/icons';
import ReviewIcon from '../../assests/images/reviews.png'


function ExploreSection() {
    return (
        <div className='exploresection'>
            <div className='exploresection__left'>
                <img src={ReviewIcon} alt="rate-us" />
                <div className='exploresection__info'>
                    <p className='exploresection__info__title'>Rate and Review Institute</p>
                    <p className='exploresection__info__subtitle'>Help other students by rating and reviewing institute</p>
                </div>
            </div>
            <div className='exploresection__right'>
                <div className='exploresection__right__button'>
                    <ArrowRightOutlined className='exploresection__right__button__icon' />
                </div>
            </div>
        </div>
    )
}

export default ExploreSection
