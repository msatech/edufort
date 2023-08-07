import React from 'react'
import './ExamsTab.css'
import { ArrowUpOutlined } from '@ant-design/icons';
import courseimage from '../../assests/images/gate.png'

function ExamsTab() {
    return (
        <div className='examstab'> 
            <div className='courseicon'>
                <img src={courseimage} alt="gateimage" />
            </div>
            <div className='courseinfo'>
                <div className='course__header'>
                    <p>RBI Office attendent</p>
                    <ArrowUpOutlined className='left__arrowicon' />                          

                </div>
                <div className='course__desc'>
                    <p>20+ Course</p>
                    <p>200+ Institute</p>
                </div>
            </div>
        </div>
    )
}

export default ExamsTab
