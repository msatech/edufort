import React from 'react'
import './EducationalModes.css'
import mortarBoardIcon from '../../assests/images/mortarboard.png'
function EducationalModes() {
    return (
        <div className='educationalmodes'>
            <div className='educationalmodes__container'>
                <div>
                    <img src={mortarBoardIcon} alt="mortarboard" />
                    <div className='educationalmodes__info'>
                        <p className='educationalmodes__desc__title'>
                            Educational Modes
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
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationalModes
