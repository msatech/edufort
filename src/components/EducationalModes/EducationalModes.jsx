import React from 'react'
import './EducationalModes.css'
import mortarBoardIcon from '../../assests/images/mortarboard.png'
import { ArrowRightOutlined } from '@ant-design/icons';
import Separator from '../Separator/Separator';
import buildingIcon from '../../assests/images/building.png'
import StudentIcon from '../../assests/images/student.png'

function EducationalModes() {
    return (
        <div className='educationalmodes'>
            <div className='educationalmodes__container'>
                <div className='educationalmodes__container__left'>
                    <img src={mortarBoardIcon} alt="mortarboard" />
                    <div className='educationalmodes__info'>
                        <p className='educationalmodes__desc__title'>
                            Education Modes
                        </p>
                        <p className='educationalmodes__desc__desc'>
                            Browse course and institute as <br />
                            per your convienent mode
                        </p>


                    </div>
                </div>

                <div className='educationalamodes__option'>
                    <div className='educationalmodes__option__top'>
                        <p className='educationalamodes__option__title'>
                            Choose educational modes
                        </p>
                        <p className='educationalamodes__option__subtitle'>
                            Select modes as per your convenience
                        </p>

                    </div>
                    <div className='educationalmodes__option__bottom'>
                        <div className='educationalmodes__option__category'>
                            <div className='educationalmodes__option__category__left__section'>
                                
                                <img src={StudentIcon} alt="onlinestidenticon" />
                                <div className='educationalmodes__option__category__info'>
                                    <p className='educationalmodes__option__category__info__title'>Online</p>
                                    <p className='educationalmodes__option__category__info__desc'>2000+ Course</p>
                                    <p className='educationalmodes__option__category__info__desc'>200+ Institutes</p>
                                </div>

                            </div>
                            <div className='educationalmodes__option__category__right__section'>
                                <div className='educationalmodes__button'>
                                    <ArrowRightOutlined className='educationalmodes__button__icon' />
                                </div>
                            </div>
                        </div>
                        <Separator className="line__separator" />
                        <div className='educationalmodes__option__category'>
                            <div className='educationalmodes__option__category__left__section'>
                                
                                <img src={buildingIcon} alt="onlinestidenticon" />
                                <div className='educationalmodes__option__category__info'>
                                    <p className='educationalmodes__option__category__info__title'>Online</p>
                                    <p className='educationalmodes__option__category__info__desc'>2000+ Course</p>
                                    <p className='educationalmodes__option__category__info__desc'>200+ Institutes</p>
                                </div>

                            </div>
                            <div className='educationalmodes__option__category__right__section'>
                                <div className='educationalmodes__button'>
                                    <ArrowRightOutlined className='educationalmodes__button__icon' />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationalModes
