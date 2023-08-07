import React from 'react'
import './Offers.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import OffersCard from './OffersCard'
import Carousel from '../Carousel/Carousel'

function Offers() {
    return (
        <div className='offers__section'>
            <ComponentTitle title="Latest Offers" subTitle="Get exclusive discounts on course purchase" />
            <div className='offers__slider__section'>
                <Carousel />
            </div>
        </div>
    )
}

export default Offers
