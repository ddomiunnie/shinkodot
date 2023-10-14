//main.js
import './main.css';
import React, { useState } from 'react';
import Contact from './Contact';
import Modal from './Modal';
import Subscribe from './Subscribe';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Main() {
  //contact
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };
  //subscribe
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false);

  const openSubscribeModal = () => {
    setSubscribeModalOpen(true);
  };
  const closeSubscribeModal = () => {
    setSubscribeModalOpen(false);
  };
  //shop popup
  const openPopup = (url) => {
    const shopURL = url || 'https://marpple.shop/shinkodot';

    //팝업창 위치
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const left = (screenWidth - 600) / 2;
    const top = (screenHeight - 400) / 2;

    const popupWindow = window.open(
      shopURL,
      '_blank',
      `width=600,height=400,left=${left},top=${top}`
    );

    if (
      !popupWindow ||
      popupWindow.closed ||
      typeof popupWindow.closed === 'undefined'
    ) {
      alert('팝업이 차단되었습니다. 팝업 차단을 해제하고 다시 시도하세요');
    }
  };

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6LfdlZkoAAAAAAf5EXOxXO_Dn2vwobNGkv8AHaIY">
        <div id="main">
          <span id="album">shinkodot</span> <br />
          <span id="artist">shinkodot</span>
          <div id="main02">
            <button id="contact" onClick={openContactModal}>
              contact
            </button>
            <button id="subscribe" onClick={openSubscribeModal}>
              subscribe
            </button>
            <button id="shop" onClick={() => openPopup()}>
              shop
            </button>
          </div>
          <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
            <Contact />
          </Modal>
          <Modal isOpen={isSubscribeModalOpen} onClose={closeSubscribeModal}>
            <Subscribe />
          </Modal>
        </div>
      </GoogleReCaptchaProvider>
      {/* icon */}
      <div className="icon-container">
        <br />
        <img
          id="icon1"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/heart-with-pulse.png"
          alt="heart-with-pulse"
        />
        <br />
        <img
          id="icon2"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/pill.png"
          alt="pill"
        />
        <br />
        <img
          id="icon3"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/snail.png"
          alt="snail"
        />
        <br />
        <img
          id="icon4"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/ghost.png"
          alt="ghost"
        />
        <br />
        <img
          id="icon5"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/fan-2.png"
          alt="fan-2"
        />
        <br />
        <img
          id="icon6"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/biotech.png"
          alt="biotech"
        />
        <br />
        <img
          id="icon7"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/beach-ball.png"
          alt="beach-ball"
        />
        <br />
        <img
          id="icon8"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/edit.png"
          alt="edit"
        />
        <br />
        <img
          id="icon9"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/physics.png"
          alt="physics"
        />
        <br />
        <img
          id="icon10"
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/spotify.png"
          alt="spotify"
        />
      </div>
    </>
  );
}
