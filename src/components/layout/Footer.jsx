import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Custom CSS embedded inside the component */}
      <style>{`
        .footer-hrms {
          background-color: #2c3e50;
          color: rgba(255, 255, 255, 0.85);
          padding: 3rem 0 0;
          margin-top: auto;
        }
        .footer-hrms h6 {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 1.25rem;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }
        .footer-hrms p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-hrms .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-hrms .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-hrms .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-hrms .footer-links a:hover {
          color: #3498db;
          padding-left: 5px;
        }
        .footer-hrms .social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .footer-hrms .social-icons a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s;
        }
        .footer-hrms .social-icons a:hover {
          background-color: #3498db;
          transform: translateY(-3px);
        }
        .footer-hrms .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .footer-hrms .newsletter-form input {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          border-radius: 4px;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          flex: 1;
        }
        .footer-hrms .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .footer-hrms .newsletter-form input:focus {
          outline: none;
          border-color: #3498db;
          background-color: rgba(255, 255, 255, 0.15);
        }
        .footer-hrms .newsletter-form button {
          background-color: #3498db;
          border: none;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.875rem;
          transition: background-color 0.2s;
          white-space: nowrap;
        }
        .footer-hrms .newsletter-form button:hover {
          background-color: #2980b9;
        }
        .footer-hrms .success-message {
          color: #2ecc71;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        .footer-hrms .footer-bottom {
          background-color: #111a21;
          padding: 1.25rem 0;
          margin-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-hrms .footer-bottom p {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-hrms .footer-bottom a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-hrms .footer-bottom a:hover {
          color: #3498db;
        }
        .footer-hrms .footer-bottom .legal-links {
          display: flex;
          gap: 1.5rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        @media (max-width: 767.98px) {
          .footer-hrms .footer-bottom .legal-links {
            justify-content: flex-start;
            margin-top: 0.5rem;
          }
          .footer-hrms {
            padding: 2rem 0 0;
          }
        }
      `}</style>

      <footer className="footer-hrms">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <h6>About HRMS Pro</h6>
              <p>
                Streamline your human resource operations with our comprehensive
                HRMS solution. Manage employees, attendance, payroll, and more
                from one unified platform.
              </p>
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Employees</a></li>
                <li><a href="#">Attendance</a></li>
                <li><a href="#">Leave Management</a></li>
                <li><a href="#">Payroll</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-lg-3 col-md-6">
              <h6>Support</h6>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">System Status</a></li>
                <li><a href="#">Contact Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h6>Stay Updated</h6>
              <p>Subscribe to our newsletter for HR tips and product updates.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
              {subscribed && (
                <div className="success-message">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>© {currentYear} HRMS Pro. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <div className="legal-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                  <a href="#">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;