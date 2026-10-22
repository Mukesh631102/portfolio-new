import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    // Direct mailto link preparation so it genuinely dispatches without fake backend
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formState.subject}] from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setStatusMessage('Opening your email client to send your message directly to Mukesh P.');
  };

  return (
    <section id="contact" className="contact-section">
      {/* Contact Me Title with Gold Line Accents */}
      <div className="contact-header">
        <span className="contact-divider-line" />
        <h3 className="contact-title">Contact Me</h3>
        <span className="contact-divider-line" />
      </div>

      {/* Contact Cards Row matching reference */}
      <div className="contact-pills-row">
        {/* Email Pill */}
        <a
          href={`mailto:${PERSONAL_INFO.contact.email}`}
          className="contact-pill-card"
          title="Send Email"
        >
          <Mail size={16} className="contact-pill-icon" />
          <span className="contact-pill-text">{PERSONAL_INFO.contact.email}</span>
        </a>

        {/* Phone Pill */}
        <a
          href={`tel:${PERSONAL_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
          className="contact-pill-card"
          title="Call Direct"
        >
          <Phone size={16} className="contact-pill-icon" />
          <span className="contact-pill-text">{PERSONAL_INFO.contact.phone}</span>
        </a>

        {/* Location Pill */}
        <div className="contact-pill-card contact-pill-static">
          <MapPin size={16} className="contact-pill-icon" />
          <span className="contact-pill-text">{PERSONAL_INFO.contact.location}</span>
        </div>
      </div>

      {/* Copy Email Fast Action */}
      <div className="contact-copy-row">
        <button onClick={handleCopyEmail} className="btn-copy-email">
          {copied ? <Check size={14} className="text-gold" /> : <Copy size={14} />}
          <span>{copied ? 'Email Copied to Clipboard!' : 'Click to Copy Email Address'}</span>
        </button>
      </div>

      {/* Interactive Quick Dispatch Form */}
      <div className="contact-form-card">
        <h4 className="form-heading">Send a Direct Message</h4>
        <p className="form-subheading">
          Looking for an AI engineering intern, full-stack collaborator, or research discussion? Leave a message below.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Jane Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="jane@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Inquiry Type</label>
            <select
              id="contact-subject"
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
            >
              <option value="Internship Opportunity">Internship Opportunity</option>
              <option value="Full-Time / Contract Role">Full-Time / Project Contract</option>
              <option value="Research Collaboration (AMFFT)">Research Collaboration (AMFFT)</option>
              <option value="General Technical Inquiry">General Technical Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={3}
              placeholder="Hi Mukesh, I came across your portfolio and would like to discuss..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
            />
          </div>

          {statusMessage && (
            <div className="form-status-alert">
              {statusMessage}
            </div>
          )}

          <button type="submit" className="btn-gold-solid form-submit-btn">
            <Send size={15} /> Compose & Send Message
          </button>
        </form>
      </div>

      {/* Social Links Row */}
      <div className="contact-social-row">
        <a
          href={PERSONAL_INFO.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-circle"
          title="GitHub"
          aria-label="GitHub"
        >
          <GitHubIcon size={18} />
        </a>
        <a
          href={PERSONAL_INFO.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-circle"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={18} />
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.contact.email}`}
          className="contact-social-circle"
          title="Email"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href={PERSONAL_INFO.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-circle"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Footer Accent Line */}
      <div className="footer-accent-line" />

      {/* "Thanks for Scrolling" footer in reference design */}
      <div className="footer-scrolling-block">
        <h4 className="thanks-text">“Thanks for Scrolling”</h4>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Mukesh P &bull; B.Tech CSE (SRM IST). Engineered with React & TypeScript.
        </p>
      </div>
    </section>
  );
};
