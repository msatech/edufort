import React from 'react'
import './WhyEdu.css'

import ComponentTitle from '../ComponentTitle/ComponentTitle'
import ReviewIcon from '../../assests/images/reviews.png'
import SearchIcon from '../../assests/images/search.png'
import VoucherIcon from '../../assests/images/voucher.png'

function WhyEdu() {
    return (
        <div className='whyedu'>
            <ComponentTitle title="Why Edufort ? " subTitle="Edufort" />
            <div className='whyedu__container'>
                <div className='whyedu__container__card'>
                    <img src={SearchIcon} alt="revviewicon" />
                    <div className='whyedu__container__card__info'>
                        <p className='whyedu__container__card__info__title'>Search Relevant Course / Institute</p>
                        <p className='whyedu__container__card__info__desc'>Get all genuine details about your course / institute at one place. </p>
                    </div>
                </div>
                <div className='whyedu__container__card'>
                    <img src={VoucherIcon} alt="revviewicon" />
                    <div className='whyedu__container__card__info'>
                        <p className='whyedu__container__card__info__title'>Guaranteed Cashback</p>
                        <p className='whyedu__container__card__info__desc'>On every course purchase get guaranteed discount &amp; cashback.  </p>
                    </div>
                </div>
                <div className='whyedu__container__card'>
                    <img src={ReviewIcon} alt="revviewicon" />
                    <div className='whyedu__container__card__info'>
                        <p className='whyedu__container__card__info__title'>Genuine Reviews</p>
                        <p className='whyedu__container__card__info__desc'>Read genuine reviews & feedback from students who has already purchased course </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default WhyEdu
