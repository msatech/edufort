import React from 'react'
import Separator from '../Separator/Separator'
import './Footer.css'
import FooterRow from './FooterRow'
import facebookIcon from '../../assests/icons/facebook.png'
import InstagramIcon from '../../assests/icons/instagram.png'
import LinkedinIcon from '../../assests/icons/linkedin.png'
import YoutubeIcon from '../../assests/icons/youtube.png'

import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


function Footer() {
    const gridItems = [
        {
            "title": "Top Courses",
            "content": ["UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course"]
        },
        {
            "title": "Popular Institutes",
            "content": ["Popular Institute In Faridabad", "Popular Institute In Delhi", "Popular Institute In Noida", "Popular Institute In Rohtak", "Popular Institute In Jaipur", "Popular Institute In Faridabad", "Popular Institute In Delhi", "Popular Institute In Noida", "Popular Institute In Rohtak", "Popular Institute In Jaipur", "Popular Institute In Faridabad", "Popular Institute In Delhi", "Popular Institute In Noida", "Popular Institute In Rohtak", "Popular Institute In Jaipur"]
        },
        {
            "title": "Top Teachers",
            "content": ["UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course", "UPSC Course", "SSC Course", "JEE Course"]
        },

    ]
    return (
        <div className='footer'>
            <div className='footer__information__section'>
                <Accordion allowZeroExpanded>

                    <AccordionItem>
                        <AccordionItemHeading  >
                            <AccordionItemButton>
                                Most Searched Links
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {gridItems.map((gridItem) => (
                                <FooterRow title={gridItem.title} content={gridItem.content} />
                            ))}
                        </AccordionItemPanel>
                    </AccordionItem>

                </Accordion>


            </div>




            <div className='footer__content'>
                <div className='branding__section'>
                    <p className='branding__section__heading'>
                        Edufort
                    </p>
                    <p className='branding__section__desc'>Edufort is India’s No 1 integrated paltform for
                        finding Course, Institute and Teachers. Edufort
                        provides genuine review of courses to help
                        students choose their course wisely.Edufort is
                        fully integrating 1,00,000+ institutes and
                        courses to students at one place with guaranteed
                        Cashback on every course purchase. </p>
                </div>
                <div className='compnay__section'>
                    <p className='footer__info__heading'> Company </p>
                    <div className='footer__info__content'>
                        <p>About Us</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                        <p>Feedback</p>
                        <p>sitemap</p>
                        <p>Refund Policy</p>
                    </div>
                </div>
                <div className='resources__section'>
                    <p className='footer__info__heading'> Resources </p>
                    <div className='footer__info__content'>
                        <p>Find Institute</p>
                        <p>Find Courses</p>
                        <p>Privacy Policy</p>
                        <p>List Institute</p>
                        <p>Blog</p>

                    </div>

                </div>
                <div className='connectwitus__section'>
                    <p className='footer__info__heading'> Connect With Us </p>
                    <div className='footer__info__content'>
                        <p>Write to us at <br /> support@edufort.in</p>
                        <p>Call us on <br />  +91 9999999999</p>
                        <p>Keep in touch</p>
                        <div className='footer__social__icons'>
                            <span className='footer__social__icon'>
                                <img src={facebookIcon} height={22} width={22} />

                            </span>
                            <span className='footer__social__icon'>
                                <img src={LinkedinIcon} height={22} width={22} />


                            </span>
                            <span className='footer__social__icon'>
                                <img src={InstagramIcon} height={20} width={20} />


                            </span>
                            <span className='footer__social__icon'>
                                <img src={YoutubeIcon} height={22} width={22} />


                            </span>



                        </div>
                    </div>

                </div>
            </div>





            <div className='footer__copywrite__section'>
                <p>@2022 www.edufort.in. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
