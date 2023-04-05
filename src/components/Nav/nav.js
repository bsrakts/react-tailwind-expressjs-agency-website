import React from "react";
import { useNav } from "../../hooks/useNav";
import { Link } from "react-router-dom";

import "./nav.css";

export const NavComp = () => {

    const {
        navOpen,
        setNavOpen
    } = useNav();

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">
                        engin tasarım
                    </div>
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                            <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>
                </div>
                <div className={navOpen ? "nav-overlay visible" : "nav-overlay hidden"} style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                    visibility: "visible"
                }}>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link to="/" onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.8s" : "0s",
                                }}
                            >Home</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.9s" : "0s",
                                }}
                            >Projects</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1s" : "0s",
                                }}
                            >About</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.1s" : "0s",
                                }}
                            >Contact</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/bloglist" onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.1s" : "0s",
                                }}
                            >Blogs</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                    </ul>
                    <div className="nav-footer">
                        <div className="location" style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.2s" : "0",
                        }}>
                            <span>İstanbul, TR</span>
                        </div>
                        <div className="nav-social-media">
                            <ul>
                                <li>
                                    <a href="#" style={{
                                        bottom: navOpen ? "0" : "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.3s" : "0s",
                                    }}>Whatsapp</a>
                                </li>
                                <li>
                                    <a href="#" style={{
                                        bottom: navOpen ? "0" : "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.4s" : "0s",
                                    }}>Mail</a>
                                </li>
                                <li>
                                    <a href="#" style={{
                                        bottom: navOpen ? "0" : "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.5s" : "0s",
                                    }}>Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}