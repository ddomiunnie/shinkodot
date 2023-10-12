import './main.css';
import React, { useState } from 'react';
import Contact from './Contact';
import Modal from './Modal';
import Subscribe from './Subscribe';

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
    const shopURL =
      url ||
      'https://www.chanel.com/kr/fragrance/?gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdr033Ek88kxLhhwhgEM2ywlfZd2StYMUFCZfT3BhTxAcWeGnKZ_O3waAmScEALw_wcB';

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
  );
}
