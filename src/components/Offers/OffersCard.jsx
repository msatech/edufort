import React from 'react'
import './OffersCard.css'
import { ArrowRightOutlined } from '@ant-design/icons';

function OffersCard() {
    return (
        <div className='offerscard'>
            <div className='offerscard__header'>
                <p>END YEAR SALE</p>
            </div>
            <p className='offer__type'>Flat</p>
            <p className='offer__price'>₹ 5000 Off</p>
            <p className='offer__name'>on UPSC Courses</p>
            <p className='offer__code__heading'>Code</p>
            <div className='offer__code__section'>
                <div className='offer__code'>
                    <p className='offer__code__text'>UPSC5K</p>
                </div>
                <div className='offer__button'>
                    <ArrowRightOutlined className='offers__button__icon' />
                </div>

            </div>
        </div>
    )
}

export default OffersCard
