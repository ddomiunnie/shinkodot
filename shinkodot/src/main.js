//main.js
import './main.css';
import React, { useState, useRef, useEffect } from 'react';
import Contact from './Contact';
import Modal from './Modal';

//credit img
import creditImg1 from './credit/1_room.png';
import creditImg2 from './credit/2_rain.png';
import creditImg3 from './credit/3_bluecamera.png';
export default function Main() {
  //neon effect
  const [isGlowing, setIsGlowing] = useState(false);
  const [clickIcon, setClickIcon] = useState(null);
  //contact
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
    if (!isPlaying) {
      mouseEffect.play();
    }
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    if (!isPlaying) {
      mouseEffect.play();
    }
  };
  //subscribe
  const subscribePopup = (url) => {
    const shopURL = url || 'https://forms.gle/HxYeFkmLDaiLc35N7';
    if (!isPlaying) {
      mouseEffect.play();
    }

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

  //shop popup
  const openPopup = (url) => {
    const shopURL = url || 'https://marpple.shop/shinkodot';
    if (!isPlaying) {
      mouseEffect.play();
    }

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
  const mouseEffect = new Audio('/effect/click.wav');

  const playMusic = async (trackNumber) => {
    const filePath = `/music/${trackNumber}.wav`;

    if (currentTrack !== filePath) {
      audioRefs.current.forEach((audio, index) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;

          document.getElementById(`icon${index + 1}`).classList.remove('glow');
        }
      });

      document.getElementById(`icon${trackNumber}`).classList.add('glow');
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
        audio.addEventListener('ended', handleMusicEnd);

        mouseEffect.play();

        const creditImg = document.getElementById('credit');
        switch (trackNumber) {
          case 1:
            creditImg.src = creditImg1;
            break;
          case 2:
            creditImg.src = creditImg2;
            break;
          case 3:
            creditImg.src = creditImg3;
            break;
          default:
            creditImg.src = '/credit/example.png';
        }
      }
    } catch (error) {
      console.error('Error fetching or playing audio:', error);
    }
  };

  const handleMusicEnd = () => {
    setIsPlaying(false);
    setIsCredit(false);
    setIsGlowing(false);
    setClickIcon(null);
  };

  //music btn
  const pauseMusic = () => {
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
        setIsCredit(false);

        document.getElementById(`icon${index + 1}`).classList.remove('glow');
      }
    });

    setIsGlowing(false);
    setClickIcon(null);

    mouseEffect.play();
  };

  //video 배경

  //view
  return (
    <>
      {/* video */}

      {/* nav-bar */}
      <div id="main">
        <span id="album">shinkodot</span> <br />
        <span id="artist">shinkodot</span>
        <div id="main02">
          <button id="contact" onClick={openContactModal}>
            contact
          </button>
          <button id="subscribe" onClick={() => subscribePopup()}>
            subscribe
          </button>
          <button id="shop" onClick={() => openPopup()}>
            shop
          </button>
        </div>
        <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
          <Contact />
        </Modal>
      </div>

      {/* logo */}
      {!isContactModalOpen && (
        <div className={`logo-container ${isPlaying ? 'hidden' : ''}`}>
          <span id="logo">SHINKODOT</span>
          <br />
          <span id="notice">click the icon</span>
        </div>
      )}
      {/* icon */}
      <div className="icon-container">
        <br />
        <button
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon1_btn"
          onClick={() => playMusic(1)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon2_btn"
          onClick={() => playMusic(2)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
            id="icon2"
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/pill.png"
            alt="pill"
          />
          {isHover && <span id="title2">\\\ rain</span>}
        </button>
        <br />
        <button
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon3_btn"
          onClick={() => playMusic(3)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon4_btn"
          onClick={() => playMusic(4)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon5_btn"
          onClick={() => playMusic(5)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon6_btn"
          onClick={() => playMusic(6)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
          className={`music-btn ${
            isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
          }`}
          id="icon7_btn"
          onClick={() => playMusic(7)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            className={`icon ${
              isGlowing && isPlaying && clickIcon === 0 ? 'glow' : ''
            }`}
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
      </div>
      {/* credit */}
      {isCredit && !isContactModalOpen && (
        <div className="credit-container">
          <img id="credit" alt="credit" />
          <button id="credit-btn" onClick={pauseMusic}>
            Stop
          </button>
        </div>
      )}
    </>
  );
}
