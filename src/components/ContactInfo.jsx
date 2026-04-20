import React, { useState } from 'react';
import './ContactInfo.css';

function ContactInfo({ data }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-info">
      <div className="contact-item">
        <label>Email</label>
        <button onClick={handleCopyEmail} className="email-button" title="Click to copy">
          {data.email}
          <span className="copy-indicator">{copied ? '✓ Copied!' : '📋 Copy'}</span>
        </button>
      </div>
      
      <div className="contact-item">
        <label>Phone</label>
        <a href={`tel:${data.phone.replace(/\s/g, '')}`}>{data.phone}</a>
      </div>
      
      <div className="contact-links">
        <a href={data.github} target="_blank" rel="noopener noreferrer" className="contact-link" title="GitHub">
          GitHub
        </a>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn">
          LinkedIn
        </a>
        <a href="/gatri_reddy_resume.pdf" download className="contact-link resume-link" title="Download Resume">
          📄 Resume
        </a>
      </div>
    </section>
  );
}

export default ContactInfo;
