import React, { useRef, useEffect, useState} from 'react';
import { fetchServices } from '../../../api/api';
import { ReusableButton } from '../../RButtonComp/rButtonComp';
import Marquee from 'react-fast-marquee';
import { CiHashtag } from "react-icons/ci";
import "./Services.css";



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
            <li>
                <a className='service-category-name'>
                    <a className='services-category-icon'>
                        <CiHashtag />
                    </a>
                    {mainTitle}
                </a>
            </li>
        )
    })

    return (
        <div className='services-content'>
            <div className='motto'>
                <div className='motto-content'>
                    <p className='motto-text'>Kreatif ve dijital ajans olarak, geleneksel ve dijital iletişim yöntemlerini entegre ederek müşterilerimize yenilikçi çözümler sunuyoruz.</p>
                    <div className='motto-button'>
                        <ReusableButton
                            buttonText="Hakkımızda"
                            path="/about"
                        />
                    </div>
                </div>
            </div>
            <div className='max-w-[1170px] m-auto pt-8 pb-0'>
                <div className='services-header'>
                <h1 className='services-header-text'>Neler Yapıyoruz?</h1>
            </div>
            <Marquee
                gradient
            gradientColor={[255, 255, 255, 0.1]}>
                <div className='services-category'>
                <ul className='services-list'>
                   {service}
                </ul>
            </div>
            </Marquee>
            </div>
        </div>
    )
}
