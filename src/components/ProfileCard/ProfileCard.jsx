import React from 'react'
import './ProfileCard.css'
import profileIcon from '../../assests/icons/user.png'
import { ArrowUpOutlined } from '@ant-design/icons';

function ProfileCard() {
    return (
        <div className='profilecard'>
            <div className='profilecard__header'>
                <img src={profileIcon} alt="profileicon" className='profileicon' />
                <p>Guest User</p>
            </div>
            <div className='profilecard__mainsection'>
                <p className='profilecard__mainsection__title'>Your Recent Activity</p>
                <div className='profile__stats__section'>
                    <div className='profile__stats__card'>
                        <div className='profile__stats__card__header'>
                            <p className='stats__value'>50</p>
                            <ArrowUpOutlined className='left__arrowicon' />                          
                       </div>
                        <p className='stats__name'> Institute Viewed </p>
                    </div>
                    <div className='profile__stats__card'>
                        <div className='profile__stats__card__header'>
                            <p className='stats__value'>10</p>
                            <ArrowUpOutlined className='right__arrowicon' />                            
                        </div>
                        <p className='stats__name'> Course Viewed </p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
