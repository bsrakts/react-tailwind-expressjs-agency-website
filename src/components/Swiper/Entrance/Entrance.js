import React from "react";
import Video from '../../../assets/videos/background.mp4';
import {ReusableButton} from "../../RButtonComp/rButtonComp";
import { Player } from '@lottiefiles/react-lottie-player';
import './Entrance.css';
import Fade from 'react-reveal/Fade';

export const Entrance = () => {
    return (
        <div className="entrance">
            <div className="entrance-content">
                <div className="video-background">
                    <video autoPlay muted loop className="entrance-video">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="mainPage-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Fade left>
                        <div className="mainPage-bigHeader text-3xl md:text-5xl lg:text-7xl">
                                <a>DIGITAL</a>
                        </div>
                        </Fade>
                        <div className="mainPage-paragraph text-white text-sm md:text-lg lg:text-xl">
                            <Fade right>
                            <p>
                                Kreatif ajansımız, fark yaratan B2B/B2C e-ticaret, web tasarımı, özel yazılım, SEO, hedef kitlesi yönetimi, mobil uygulama geliştirme ve daha fazlası ile dijital dünyada iz bırakmanızı sağlıyor.
                            </p>
                            </Fade>
                        </div>
                        <div className="proje-button">
                            <ReusableButton
                                buttonText="Projeniz mi var?"
                                path="/contact"
                            />
                        </div>
                    </div>
                    <div className="scroll-down absolute bottom-12 left-1/2 transform -translate-x-1/2">
                        <Player
                            src='https://assets5.lottiefiles.com/packages/lf20_EdAmna.json'
                            className="player"
                            autoplay
                            loop
                            style={{ height: '80px', width: '80px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

