import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <Fade bottom cascade>
        <div className="footer-container">
          <div>
            <h1 className="footer-title">Engin Tasarım</h1>
            <p className="footer-info">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
            </p>
            <div className="contact-area">
              <div className="phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="phone-text">Çözüme mi ihtiyacınız var?</p>
                  <h3 className="phone-call">555-555-55-55</h3>
                </div>
              </div>

              <div className="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <div>
                  <p className="email-text">Merhaba diyerek başlayabilirsiniz</p>
                  <h3 className='email-send'>info@engintasarim.com</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="contact-us">
                İletişime Geç
              </h2>
              <p className="contact-us-text">
                Çözüme mi ihtiyacınız var? Mailinizi girin en kısa sürede sizinle iletişime geçeceğiz
              </p>
              <div className="relative">
                <input
                  placeholder="Mailinizi Giriniz"
                  className="contact-us-input"
                ></input>
                <button className="contact-us-button">
                  <span className="absolute inset-0 bg-[#e98717]"></span>
                  <span className="submit-button">
                    Kaydet
                  </span>
                  Kaydet
                </button>
              </div>
            </div>

            <div className="social-media-area">
              <div className="social-media">
                <span>
                  <GrFacebookOption className="fb-icon" />
                </span>
              </div>
              <div className="social-media">
                <span>
                  <FiYoutube className="youtube-icon" />
                </span>
              </div>
              <div className="social-media">
                <span>
                  <FaWhatsapp className="whatsapp-icon" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="lower-footer">
          <div className="lower-container">
            <p>Hakkımızda</p>
            <p>İletişim</p>
            <p>Hizmetler</p>
            <p>Kişisel Verilerin Korunması Hakkında</p>
            <p>Gizlilik Bildirimi</p>
          </div>
          <div className="license">
          Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. © 2023 Tüm hakları saklıdır.
          </div>
        </div>
      </Fade>
    </div>
  );
}