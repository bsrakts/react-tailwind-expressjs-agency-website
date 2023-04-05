import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './References.css'
import 'swiper/css';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const References = () => {

    SwiperCore.use([Autoplay]);

    const references = [
        {
            "id": "1",
            "img": "https://picsum.photos/id/212/500/200",
        },
        {
            "id": "2",
            "img": "https://picsum.photos/id/276/500/200",
        },
        {
            "id": "3",
            "img": "https://picsum.photos/id/289/500/200",
        },
        {
            "id": "4",
            "img": "https://picsum.photos/id/230/500/200",
        },
        {
            "id": "4",
            "img": "https://picsum.photos/id/2/500/200",
        },
        {
            "id": "4",
            "img": "https://picsum.photos/id/36/500/200",
        },
        {
            "id": "4",
            "img": "https://picsum.photos/id/54/500/200",
        }
    ]

    const reference = references.map((reference) => {
        const { id, img } = reference;
        return (
            <SwiperSlide
                style={{ borderRadius: 50 + "px" }}

            >
                <a className="references-img">
                    <img src={img} alt="" />
                </a>
            </SwiperSlide>
        )
    })

    return (
        <div className="references">
            <h1 className="references-header">References</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={5}
                slidesPerGroup={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    865: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 5,
                    },
                    1700: {
                        slidesPerView: 6,
                    }
                }}
                scrollbar={{ draggable: true }}
                speed={1500}
                direction={'horizontal'}
                autoplay={{
                    delay: 900,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev-reference',
                    nextEl: '.swiper-button-next-reference',
                }}
                style={{ height: 200 + "px", marginBottom: 25 + 'px' }}
            >
                {reference}
                <div className="swiper-button-next-reference">
                    <BsArrowRight />
                </div>
                <div className="swiper-button-prev-reference">
                    <BsArrowLeft />
                </div>
            </Swiper>
        </div>
    )
}