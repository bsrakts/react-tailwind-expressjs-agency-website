import React, { useRef, useEffect, useState} from 'react';
import { fetchServices } from '../../../api/api';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./Services.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";


let parallaxConfig;

export const Services = () => {
    const [servicesData,setServicesData] = useState([]);

    const windowSize = useRef(window.innerWidth);

    parallaxConfig = windowSize < 1200 ? 1 : !0;

    useEffect(() => {
        fetchServices().then((servicesData) => setServicesData(servicesData));
     }, [setServicesData]);

    const service = servicesData.map((service) => {
        const {id, img, mainTitle, orderTitleText, category, paragraph, orderNumber} = service;
        return(
                        <SwiperSlide>
                            <div className="swiper-slide__block">
                                <div className="swiper-slide__block__img">
                                    <a target="_blank" href="#">
                                        <img src={img} alt="" />
                                    </a>
                                </div>
                                <div className="swiper-slide__block__text">
                                    <h2 className="main__title">{mainTitle}
                                        {/* <br />{orderTitleText} */}
                                        <span>.</span>
                                    </h2>
                                    <h3 className="main__subtitle">{category}
                                        <span> • 2017</span>
                                    </h3>
                                    <p className="paragraphe">{paragraph}</p>
                                    <a className="link" target="_blank" href="#">Discover</a>
                                    <span className="number">{orderNumber}</span>
                                </div>
                            </div>
                        </SwiperSlide>
        )
    })

    return (
        <div className='services-content'>
            <h1 className='services-header'>Hizmetlerimiz</h1>
        <div className="secondSwiper-content">
        <section className="section__slider">
            <div className="container__center">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    direction={'horizontal'}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    scrollbar={{ draggable: true }}
                    parallax={parallaxConfig}
                    speed={1500}
                    loop={true}
                >
                    {service}
                    <div className="swiper-button-next">
                <BsArrowRight />
            </div>
            <div className="swiper-button-prev">
                <BsArrowLeft />
            </div>
        </Swiper>
    </div>
</section>
</div>
        </div>
    )
}
