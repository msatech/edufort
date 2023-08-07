import React, { Suspense } from 'react';
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import SearchAreaLoader from '../SkeletonLoader/SearchAreaLoader';
// import CitiesCard from './CitiesCard'
import './ExploreInstitute.css'
const CitiesCard = React.lazy(() => import('./CitiesCard'));

function ExploreInstitute() {
    return (
        <div className='exploreinstitute'>
            <ComponentTitle title="Explore Institute In Popular Cities" subTitle="Top Cities" />
            <div className='explore__container'>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>
                <Suspense fallback={<div><SearchAreaLoader /></div>}>
                    <CitiesCard />
                </Suspense>

            </div>
        </div>
    )
}

export default ExploreInstitute
