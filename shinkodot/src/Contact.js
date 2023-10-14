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
              width="24"
              height="24"
              src="https://img.icons8.com/material/24/link--v1.png"
              alt="link--v1"
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
              width="24"
              height="24"
              src="https://img.icons8.com/material/24/link--v1.png"
              alt="link--v1"
            />
          </a>
        </span>
      </div>
    </div>
  );
}
