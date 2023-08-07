import React from 'react'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import './TrendingSearches.css'
import TrendIcon from '../../assests/icons/trend.png'

function TrendingSearches() {
    return (
        <div className='trendingsearches'>
            <ComponentTitle title="Trending Searches" subTitle="in Faridabad" />
            <div className='trendingsearches__elements'>
                <div className='trendingsearches__element'>
                    <img src={TrendIcon} className="trending__icon" />
                    <p>History Optinal Course</p>
                </div>

                <div className='trendingsearches__element'>
                    <img src={TrendIcon} className="trending__icon" />
                    <p>History Optinal Course</p>
                </div>

                <div className='trendingsearches__element'>
                    <img src={TrendIcon} className="trending__icon" />
                    <p>History Optinal Course</p>
                </div>

                <div className='trendingsearches__element'>
                    <img src={TrendIcon} className="trending__icon" />
                    <p>History Optinal Course</p>
                </div>

                <div className='trendingsearches__element'>
                    <img src={TrendIcon} className="trending__icon" />
                    <p>History Optinal Course</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingSearches
