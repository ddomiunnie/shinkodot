import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <span>
          shinkodot@gmail.com
          <a
            href="mailto:shinkodot@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="gmail"
              width="16"
              height="16"
              src="https://img.icons8.com/tiny-glyph/16/link.png"
              alt="link"
            />
          </a>
        </span>
        <br />
        <span>
          https://instagram.com/shinkodot
          <a
            href="https://instagram.com/shinkodot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="insta"
              width="16"
              height="16"
              src="https://img.icons8.com/tiny-glyph/16/link.png"
              alt="link"
            />
          </a>
        </span>
      </div>
    </div>
  );
}
