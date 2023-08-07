import React from 'react'
import TopHeader from './TopHeader'
import './Header.css'
import SearchSection from './SearchSection'

function Header() {
    return (
        <div className='mainheader'>
            <div className='top__header'>
                <TopHeader />
            </div>
            <div className='hero__section'>
                <p className='hero__section__infotext'>It's Simple and Smart</p>
                <p className='hero__section__herotext'>India's No.1 Institute Listing Platform </p>
                {/* <p className='hero__section__infotext'>It's Simple and Smart</p> */}
            </div>
            <div className="search__section__container">
                <SearchSection />
            </div>
        </div>
    )
}

export default Header
