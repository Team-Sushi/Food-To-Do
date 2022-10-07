import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { items } from './RecentlyPurchasedData';
import imgDef from './unavailable.png';

const DashboardCarousel = ({ UserItems }) => {

    var isTouching = false;
    window.addEventListener('touchstart', function(){
    document.documentElement.classList.remove('mouse');
    document.documentElement.classList.add('touch');
    isTouching = true;
    });
    
    window.addEventListener('mousemove', function(){
    if(isTouching) isTouching = false
    else
    {
        document.documentElement.classList.remove('touch');
        document.documentElement.classList.add('mouse');
    }
    });

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgDef,
        }));
    };

    return (
        <div className="Dashboard-Carousel">
            <Slider {...settings}>
                {UserItems.map((item) => (
                <div className="Dashboard-item-card">
                    <div className="dashboard-item-card-top">
                        <img
                            src={
                            defaultImage[item.title] === item.title
                                ? defaultImage.linkDefault
                                : item.linkImg
                            }
                            alt={item.title}
                            onError={handleErrorImage}
                        />
                        <h1>{item.title}</h1>
                    </div>
                    {/* <div className="dashboard-item-card-bottom">
                        <h3>{item.price}</h3>
                        <span className="dashboard-item-category">{item.category}</span>
                    </div> */}
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default DashboardCarousel;