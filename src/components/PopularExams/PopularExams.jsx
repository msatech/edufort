import React, { Suspense } from 'react';
import './PopularExams.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import SearchAreaLoader from '../SkeletonLoader/SearchAreaLoader';
// import ExamsTab from './ExamsTab';
const ExamsTab = React.lazy(() => import('./ExamsTab'));
function PopularExams() {
    function callback(e) {
        console.log(e);
    }
    return (
        <div className='popularexams'>
            <ComponentTitle title="Popular Exams" subTitle="Choose courses from your preferred institute " />
            <div className='tab__container'>
                <Tabs className='popularexam__tabs' defaultActiveKey="1" onChange={callback}>
                    <TabPane className='popularexam__tab' tab="upcomming" key="1">
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        <Suspense fallback={<SearchAreaLoader />}>
                            <ExamsTab />
                        </Suspense>
                        
                    </TabPane>

                    <TabPane tab="SSC" key="2">
                        Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens acsan an, ei eum solum pertinacia democritum.
                    </TabPane>

                    <TabPane tab="Banking" key="3">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="GATE" key="4">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="Medical" key="5">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="UPSC" key="6">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="Defence" key="7">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="Law" key="8">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="NDA" key="9">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>


                    <TabPane tab="MBA" key="10">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>

                    <TabPane tab="Btech" key="11">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>


                    <TabPane tab="Finance " key="12">
                        Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine theophrastus, mei nulla suscipit comprehensam ad.
                    </TabPane>


                </Tabs>
            </div>

        </div>
    )
}

export default PopularExams
