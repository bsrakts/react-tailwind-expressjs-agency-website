import React, { useState } from "react";
import Modal from "react-modal";
import { FiMail, FiX, FiPhone } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import './projectquestion.css';

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

export const ProjectQuestion = () => {
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
    <div className="project-question">
      <div className="projectquestion-content">
        <div className="project-motto">
          <h1>Projeniz mi var?</h1>
        </div>
        <div className="pq-text">
          <p className="pq-text-p">
            Yaratıcı çözümlerimizle markanızı zirveye taşıyoruz.
            <br />
            Dijital dünyada öne çıkmak için bize katılın.
          </p>
        </div>
        <div className="pq-contact-button">
          <button className="pg-button-icon" onClick={handleWhatsappClick}>
            <span><BsWhatsapp className="text-green-400"/></span> Whatsapp
          </button>
          <button className="pg-button-icon" onClick={handleModalOpen}>
            <span><FiMail className="text-blue-400"/></span> E-posta
          </button>
        </div>
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
    </div>
  )
}