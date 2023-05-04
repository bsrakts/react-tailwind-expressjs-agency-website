import React, { useState, useEffect } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './References.css';
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export const References = () => {

    SwiperCore.use([EffectCoverflow, Navigation]);

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
            "id": "5",
            "img": "https://picsum.photos/id/2/500/200",
        },
        {
            "id": "6",
            "img": "https://picsum.photos/id/36/500/200",
        },
        {
            "id": "7",
            "img": "https://picsum.photos/id/54/500/200",
        },
        {
            "id": "8",
            "img": "https://picsum.photos/id/54/500/200",
        },
        {
            "id": "9",
            "img": "https://picsum.photos/id/54/500/200",
        },
        {
            "id": "10",
            "img": "https://picsum.photos/id/54/500/200",
        }
    ]

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);

    const handleClickNext = () => {
        setStart(start + 5);
        setEnd(end + 5);
    };

    const handleClickPrev = () => {
        setStart(start - 5);
        setEnd(end - 5);
    };

    const referenceGroups = [];
    for (let i = 0; i < references.length; i += 4) {
        referenceGroups.push(references.slice(i, i + 4));
    }

    const referenceSlides = referenceGroups.map((group, index) => {
        return (
            <SwiperSlide key={`group-${index}`}>
                <div className="references-group">
                    {group.map((reference) => (
                        <div key={reference.id} className="references-img">
                            <img src={reference.img} alt="" />
                        </div>
                    ))}
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div className="references">
            <div className="references-content-mp">
                <h1 className="references-header">Kimlerle Çalıştık?</h1>
                <div className="references-bottom">
                    <div className="references-content-m">
                <Swiper 
                    className="references-swiper"
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={10}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    direction={'vertical'}
                    navigation={{
                        prevEl: '.swiper-button-next-reference',
                        nextEl: '.swiper-button-prev-reference',
                    }}
                    scrollbar={{ draggable: true }}
                    speed={4000}
                    loop={true}
                    autoplay={{
                      delay:4000,
                      pauseOnMouseEnter: true,
                      disableOnInteraction: false
                }}
                >
                    {referenceSlides}
                </Swiper>
                </div>
                <div className="prev-next-button">
                   <div className="swiper-button-next-reference" onClick={handleClickNext}>
                        <BsArrowUp />
                    </div>
                    <div className="swiper-button-prev-reference" onClick={handleClickPrev}>
                        <BsArrowDown />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}