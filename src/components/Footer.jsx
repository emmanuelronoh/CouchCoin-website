import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'; // Ensure the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="footer-content container">
        <div className="footer-column">
          <div className="footer__grouping">
            <ul className="footer__grouping-list">
              <li><img src="./images/freelancer-logo-old-light.svg" alt="logo" /></li>
              <li>
                <FontAwesomeIcon icon={faGlobe} className="footer-icon" />
                <a className="footer-link" href="#">US (International) / English</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} className="footer-icon" />
                <a className="footer-link" href="#">Help & Support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Columns */}
        {[
          { title: "Couch-Coin", links: ["Categories", "Projects", "Contests", "Freelancers", "Enterprise", "Membership", "Preferred Freelancer Program", "Project Management", "Local Jobs", "Photo Anywhere", "Showcase", "API for Developers", "Get Verified", "Desktop App"] },
          { title: "About", links: ["About us", "How it Works", "Careers", "Security", "Investor", "Sitemap", "Stories", "News"] },
          { title: "Terms", links: ["Privacy Policy", "Terms and Conditions", "Copyright Policy", "Code of Conduct", "Fees and Charges"] },
          { title: "Partners", links: ["Escrow.com", "Loadshift", "Warrior Forum"] },
        ].map((group, index) => (
          <div className="footer-column" key={index}>
            <div className="footer__grouping">
              <h4 className="footer__grouping-title">{group.title}</h4>
              <ul className="footer__grouping-list">
                {group.links.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Apps Section */}
        <div className="footer-column">
          <div className="footer__grouping">
            <h4 className="footer__grouping-title m-left-14">Apps</h4>
            <ul className="footer__grouping-list links-container">
              <li><a href="#"><img src="./images/app-store.svg" alt="App Store" /></a></li>
              <li><a href="#"><img src="./images/google-play.svg" alt="Play Store" /></a></li>
            </ul>
            <ul className="social-media_menu">
              <li><a className="social-media_item fab fa-facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="social-media_item fab fa-twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a className="social-media_item fab fa-youtube" href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a className="social-media_item fab fa-instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <section className="footer-copyright container">
        <p className="copyright-reg">
          <span>63,585,275</span><br />
          Registered Users
        </p>
        <p className="copyright-total">
          <span>22,174,110</span><br />
          Total Jobs Posted
        </p>
        <p className="copyright-desc">
          CouchCoin ® is a registered Trademark of CouchCoin Technology Pty Limited (ACN 142 189 759)
          Copyright © 2022 CouchCoin Technology Pty Limited (ACN 142 189 759)
        </p>
      </section>
    </footer>
  );
};

export default Footer;
