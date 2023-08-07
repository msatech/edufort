import React, { useState } from 'react'
import './TopHeader.css'
import { AimOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import Divider from '../Divider/Divider';
import OffersIcon from '../../assests/images/offers.png'

function TopHeader() {
    const [navbar, setNavbar] = useState(false)

    const changeNavBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavBackground);

    return (
        <div className={navbar ? 'topheader active' : 'topheader'}>
            <div className='top__header__container'>
                <div className='topheader__logo'>
                    <p className='logo__name'>EDUFORT</p>
                    <div className='location__detect__btn'>
                      Select Goal  <DownOutlined style={{fontSize:"10px"}} />
                    </div>
                    <div className='topheader__navs'>
                    <p className='topheader__nav active'>Find Courses</p>
                    <p className='topheader__nav'>Institutes</p>
                    <p className='topheader__nav'>Teachers</p>  

                </div>
                </div>
                
                <div className='topheader__auth'>
                    <div className='listyouurself__btn'>
                        + List Yourself
                    </div>
                    <div>

                    <Divider />
                    </div>
                    <div className='offers__btn'>
                        <img src={OffersIcon} className='offers__btn__icon' /> <div className='offers__btn__text'><p> Offers </p> <p className='offers__btn__sub__text'> Best Offers </p>  </div> 
                    </div>

                    <Divider />
                    
                    
                    <div className='login__register__btn'>
                        <UserOutlined style={{fontSize:"15px"}} />  login or Create Account
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopHeader
