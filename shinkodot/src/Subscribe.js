import './Subscribe.css';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState } from 'react';

export default function Subscribe() {
  const [isHuman, setIsHuman] = useState(false);
  const [email, setEmail] = useState('');

  const handleCaptchaChange = (value) => {
    console.log('Captcha value: ', value);
    setIsHuman(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (isHuman) {
      console.log('Submitting email: ', email);
      // 서버로 이메일 데이터베이스에 담는 로직 (나중에 추가)
    } else {
      console.log('로봇이 아님을 확인해주세요');
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-info">
        <span>email을 통해서 shinkodot의 새로운 소식을 보내드립니다.</span>
        <br />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit} disabled={!isHuman}>
          submit
        </button>
        <br />
        <div className="recaptcha">
          <ReCAPTCHA
            sitekey="6LfrIJkoAAAAAKmItEK_7U2dj4-GudMENDUzacew"
            onChange={handleCaptchaChange}
          />
        </div>
      </div>
    </div>
  );
}
