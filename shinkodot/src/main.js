//main.js
import './main.css';
import React, { useState, useRef, useEffect } from 'react';
import Contact from './Contact';
import Modal from './Modal';
import Subscribe from './Subscribe';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Main() {
  //neon effect
  const [isGlowing, setIsGlowing] = useState(false);
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isCredit, setIsCredit] = useState(false);
  const audioRefs = useRef(Array.from({ length: 7 }, () => new Audio()));

  const playMusic = async (trackNumber) => {
    const filePath = `/music/${trackNumber}.wav`;
    setIsGlowing(true);

    if (currentTrack !== filePath) {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }

    setCurrentTrack(filePath);

    try {
      const response = await fetch(filePath);
      const blob = await response.blob();

      const audio = audioRefs.current[trackNumber - 1];
      if (audio) {
        audio.src = URL.createObjectURL(blob);
        audio.play();
        setIsPlaying(true);
        setIsCredit(true);
      }
    } catch (error) {
      console.error('Error fetching or playing audio:', error);
    }
  };

  //music btn
  const pauseMusic = () => {
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
        setIsCredit(false);
      }
    });
    setIsGlowing(false);
  };

  //video 배경

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
      <div className={`logo-container ${isPlaying ? 'hidden' : ''}`}>
        <span id="logo">SHINKODOT</span>
        <br />
        <span id="notice">click the icon</span>
      </div>
      {/* icon */}
      <div className="icon-container">
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon1_btn"
          onClick={() => playMusic(1)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon1 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon1"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/heart-with-pulse.png"
            alt="heart-with-pulse"
          />
          {isHover && <span id="title1">room</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon2_btn"
          onClick={() => playMusic(2)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon2 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon2"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/pill.png"
            alt="pill"
          />
          {isHover && <span id="title2">rain</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon3_btn"
          onClick={() => playMusic(3)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon3 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon3"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/snail.png"
            alt="snail"
          />
          {isHover && <span id="title3">opal</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon4_btn"
          onClick={() => playMusic(4)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon4 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon4"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/ghost.png"
            alt="ghost"
          />
          {isHover && <span id="title4">blue camera</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon5_btn"
          onClick={() => playMusic(5)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon5 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon5"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/fan-2.png"
            alt="fan-2"
          />
          {isHover && <span id="title5">glow in the dark</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon6_btn"
          onClick={() => playMusic(6)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon6 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon6"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/biotech.png"
            alt="biotech"
          />
          {isHover && <span id="title6">ET</span>}
        </button>
        <br />
        <button
          className={`music-btn ${isGlowing && isPlaying ? 'glow' : ''}`}
          id="icon7_btn"
          onClick={() => playMusic(7)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon7 ${isGlowing && isPlaying ? 'glow' : ''}`}
            id="icon7"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/beach-ball.png"
            alt="beach-ball"
          />
          {isHover && <span id="title7">10</span>}
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
        <br />
        <button onClick={pauseMusic}>중지</button>
      </div>
      {/* credit */}
      {isCredit && (
        <div className="credit-container">
          <span id="credit">Music by SHINKODOT</span>
        </div>
      )}
    </>
  );
}
