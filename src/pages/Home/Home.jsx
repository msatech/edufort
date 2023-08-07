import React , { useRef, useEffect } from 'react'
import EducationalModes from '../../components/EducationalModes/EducationalModes'
import ExploreSection from '../../components/Explore/ExploreSection'
import ExploreInstitute from '../../components/ExploreInstitute/ExploreInstitute'
import NewsAndNotification from '../../components/NewsAndNotification/NewsAndNotification'
import Offers from '../../components/Offers/Offers'
import PopularExams from '../../components/PopularExams/PopularExams'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import WhatOurStudent from '../../components/WhatOurStudent/WhatOurStudent'
import WhyEdu from '../../components/WhyEdu/WhyEdu'
import Faq from '../../components/FAQ/Faq'

import './Home.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import SearchWithFuse from '../../components/PracticeCodes/SearchWithFuse'

function Home() {

    return (
        <div className='home'>
            <div className='main__header__section'>
                <Header />
            </div>
            <div className='home__container'>
                <div className='leftsection__section' >
                    <TrendingSearches />
                    <Offers />
                    <PopularExams />
                    <EducationalModes />
                    <ExploreInstitute />
                    <ExploreSection />

                </div>
                <div className='right__section'>
                    <div className='right__section__element is-sticky'>
                        <ProfileCard />
                        <NewsAndNotification />
                    </div>
                </div>
            </div>

            <div className='Home__bottom__section'>
                <WhyEdu />
                <WhatOurStudent />
                <Faq />
                

            </div>
            <Footer />
        </div>
    )
}

export default Home
