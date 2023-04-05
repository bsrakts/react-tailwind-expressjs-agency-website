import React from "react";
import './Entrance.css';
import { Player } from '@lottiefiles/react-lottie-player';
import Fade from 'react-reveal/Fade';
import Video from '../../../assets/videos/background.mp4'

export const Entrance = () => {
    return (
        <div className="entrance">
            <div className="entrance-content">
                <div className="video-background">
                    <video autoPlay muted loop className="object-cover w-full max-h-[110vh]">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="mainPage-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Fade left>
                        <div className="mainPage-bigHeader text-white text-3xl md:text-5xl lg:text-7xl">
                           <a>Dijital
                           çözüm mü arıyorsunuz?</a>
                        </div>
                        </Fade>
                        <div className="mainPage-paragraph text-white text-sm md:text-lg lg:text-xl">
                            <Fade right>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                            </Fade>
                        </div>
                        {/* <div className="contact-area flex py-3">
                <input type="telephone" placeholder="Çözüme mi ihtiyacınız var ?" className="input input-bordered input-success w-full max-w-xs" />
                <button className="btn btn-active"><a>Beni Ara</a></button>
            </div> */}
                    </div>
                    <div className="scroll-down absolute bottom-5 left-1/2 transform -translate-x-1/2">
                        <Player
                            src='https://assets5.lottiefiles.com/packages/lf20_EdAmna.json'
                            className="player"
                            autoplay
                            loop
                            style={{ height: '80px', width: '80px' }}
                        />
                    </div>
                    {/* <div className="wave-group">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div> */}
                </div>
            </div>
        </div>
    )
}

