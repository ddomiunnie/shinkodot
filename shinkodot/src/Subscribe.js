import './Subscribe.css';
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import React, { useState } from 'react';

export default function Subscribe() {
  const [isHuman, setIsHuman] = useState(false);
  const [email, setEmail] = useState('');

  // useGoogleReCaptcha 훅을 컴포넌트 내부에서 사용
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleCaptchaChange = async () => {
    const token = await executeRecaptcha();
    console.log('Captcha token: ', token);
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
    <GoogleReCaptchaProvider reCaptchaKey="6LfdlZkoAAAAAAf5EXOxXO_Dn2vwobNGkv8AHaIY">
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
            <GoogleReCaptcha onVerify={handleCaptchaChange} action="submit" />
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
