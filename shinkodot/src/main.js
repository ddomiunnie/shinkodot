//main.js
import './main.css';
import React, { useState, useRef } from 'react';
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

  //music player
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRefs = useRef(Array.from({ length: 7 }, () => new Audio()));

  const playMusic = (trackNumber) => {
    const filePath = `public/music/${trackNumber}.wav`;

    if (currentTrack !== filePath) {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }

    setCurrentTrack(filePath);
    const audio = audioRefs.current[trackNumber - 1];
    if (audio) {
      audio.src = filePath;
      audio.play();
    }
  };

  //view
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
      {/* logo */}
      <div className="logo-container">
        <span id="logo">SHINKODOT</span>
        <br />
        <span id="notice">click the icon</span>
      </div>
      {/* icon */}
      <div className="icon-container">
        <br />
        <button
          className="music-btn"
          id="icon1_btn"
          onClick={() => playMusic(1)}
        >
          <img
            id="icon1"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/heart-with-pulse.png"
            alt="heart-with-pulse"
          />
        </button>
        <br />
        <button className="music-btn" id="icon2_btn">
          <img
            id="icon2"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/pill.png"
            alt="pill"
          />
        </button>
        <br />
        <button className="music-btn" id="icon3_btn">
          <img
            id="icon3"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/snail.png"
            alt="snail"
          />
        </button>
        <br />
        <button className="music-btn" id="icon4_btn">
          <img
            id="icon4"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/ghost.png"
            alt="ghost"
          />
        </button>
        <br />
        <button className="music-btn" id="icon5_btn">
          <img
            id="icon5"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/fan-2.png"
            alt="fan-2"
          />
        </button>
        <br />
        <button className="music-btn" id="icon6_btn">
          <img
            id="icon6"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/biotech.png"
            alt="biotech"
          />
        </button>
        <br />
        <button className="music-btn" id="icon7_btn">
          <img
            id="icon7"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/beach-ball.png"
            alt="beach-ball"
          />
        </button>
        <br />
        <button className="music-btn" id="icon8_btn">
          <img
            id="icon8"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/edit.png"
            alt="edit"
          />
        </button>
        <br />
        <button className="music-btn" id="icon9_btn">
          <img
            id="icon9"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/physics.png"
            alt="physics"
          />
        </button>
        <br />
        <button className="music-btn" id="icon10_btn">
          <img
            id="icon10"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/spotify.png"
            alt="spotify"
          />
        </button>
      </div>
    </>
  );
}
