import React from 'react'
import './Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OffersCard from '../Offers/OffersCard';

function Carousel({ CarouselItems }) {
    const options = {
        loop: false,
        margin: 15,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        lazyLoad: true,
        animateOut: true,
        responsive:
        {
            0: { items: 1 },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 4 },
            1199: { items: 5 }
        }
    }

    const element = 8;

    return (
        <div className='carousel'>
            <OwlCarousel  {...options} className='owl-theme' nav>


                <div class='item'>
                    <OffersCard />
                </div>

                <div class='item'>
                    <OffersCard />

                </div>


                <div class='item'>
                    <OffersCard />

                </div>


                <div class='item'>
                    <OffersCard />

                </div>

                <div class='item'>
                    <OffersCard />
                </div>

                <div class='item'>
                    <OffersCard />
                </div>

                <div class='item'>
                    <OffersCard />
                </div>



            </OwlCarousel>
        </div>
    )
}

export default Carousel
