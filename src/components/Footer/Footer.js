import React, {useState} from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiX, FiPhone } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Modal from "react-modal";
import Fade from "react-reveal/Fade";

import './Footer.css'

const customStyles = {
  content: {
    zIndex: '9999',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '500px',
    height: '400px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetail, setProjectDetail] = useState('');

  const handleWhatsappClick = () => {
    window.location.href = 'https://wa.me/whatsapp-numarasi';
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmail('');
    setPhone('');
    setProjectDetail('');
  };

  const handleEmailSubmit = () => {
    const subject = 'Projem hakkında bilgi almak istiyorum';
    const body = `E-posta: ${email}\nTelefon: ${phone}\nProje detayı: ${projectDetail}`;
    const mailtoUrl = `mailto:destek@ornek.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
    handleModalClose();
  };

  return (
    <div className="footer">
      <Fade bottom cascade>
        <div className="footer-container">
          <div>
            <h1 className="footer-title">Engin Tasarım</h1>
            <p className="footer-info">
              Kreatif ajansımız, fark yaratan B2B/B2C e-ticaret, web tasarımı, özel yazılım, SEO, hedef kitlesi yönetimi, mobil uygulama geliştirme ve daha fazlası ile dijital dünyada iz bırakmanızı sağlıyor.
            </p>
            {/* <div className="contact-area">
              <div className="phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#18181c] bg-yellow-400 border-2 border-white rounded-full leading-4 p-2"
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
                  className="h-8 w-8 text-[#18181c] bg-yellow-400 border-2 border-white rounded-full leading-4 p-2"
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
            </div> */}
          </div>

          <div>
            <div className=''>
              <h2 className="contact-us">
                İletişime Geç
              </h2>
              <p className="contact-us-text">
                Çözüme mi ihtiyacınız var? Mailinizi girin en kısa sürede sizinle iletişime geçeceğiz
              </p>
              <div className='flex items-center'>
                <div className="footer-contact-button">
                <button className="pg-button-icon" onClick={handleWhatsappClick}>
                  <span><BsWhatsapp className="text-green-400" /></span> Whatsapp
                </button>
                <button className="pg-button-icon" onClick={handleModalOpen}>
                  <span><FiMail className="text-blue-400" /></span> E-posta
                </button>
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
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="lower-footer">
          <div className="lower-container">
            <p>Hakkımızda</p>
            <p>Hizmetler</p>
            <p>İletişim</p>
            <p>Kişisel Verilerin Korunması</p>
            <p>Gizlilik Bildirimi</p>
          </div>
          <div className="license">
            Engin Tasarım ve Elektronik San. Tic. Ltd. Şti. © 2023 Tüm hakları saklıdır.
          </div>
        </div>
      </Fade>
      <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          style={customStyles}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="model-header-text">Proje Detaylarını Maille</h2>
              <button className="close-button" onClick={handleModalClose}><FiX className="text-3xl"/></button>
            </div>
            <div className="form-group">
              <label htmlFor="email"><FiMail className="mr-1"/> E-posta</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone"><FiPhone className="mr-1"/> Telefon Numarası</label>
              <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="projectDetail">Proje Detayı</label>
              <textarea id="projectDetail" value={projectDetail} onChange={e => setProjectDetail(e.target.value)} required />
            </div>
            <button className="pg-submit-btn" onClick={handleEmailSubmit}>Gönder</button>
          </div>
        </Modal>
    </div>
  );
}