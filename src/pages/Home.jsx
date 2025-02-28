import React, { useState } from 'react';
import './styles/normalize.css';
import './styles/style.css';
import './styles/responsive.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles (if needed)
import "swiper/css/pagination"; // Pagination styles (if needed)


const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown toggle
  const handleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };
  return (
    <div className="home">
      <div className="home">
        <nav className="nav container-fluid">
          <div className="nav-content container">
            <ul className="nav-menu">
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">How It Works <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#freelancers">For Freelancers</a></li>
                  <li><a href="#clients">For Clients</a></li>
                  <li><a href="#payment">Payment Protection</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Browse Jobs <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#web-dev">Web Development</a></li>
                  <li><a href="#design">Graphic Design</a></li>
                  <li><a href="#writing">Content Writing</a></li>
                  <li><a href="#marketing">Digital Marketing</a></li>
                  <li><a href="#more-jobs">See More...</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Why Us? <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#trust">Trusted by Millions</a></li>
                  <li><a href="#security">Secure Payments</a></li>
                  <li><a href="#reviews">Customer Reviews</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Membership <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#pricing">Pricing & Plans</a></li>
                  <li><a href="#benefits">Benefits</a></li>
                  <li><a href="#compare">Compare Plans</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Resources <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#blog">Freelance Blog</a></li>
                  <li><a href="#guides">Guides & Tutorials</a></li>
                  <li><a href="#legal">Legal & Policies</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Community <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#forums">Forums</a></li>
                  <li><a href="#events">Events & Meetups</a></li>
                  <li><a href="#awards">Freelancer Awards</a></li>
                </ul>
              </li>
              <li className="nav-menu_item dropdown">
                <a href="#" className="nav-menu_link">Support/FAQs <span className="arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#help-center">Help Center</a></li>
                  <li><a href="#contact">Contact Support</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav-links">
              <li className="nav-links_item">
                <a href="#post-project" className="nav-link_button">Post a Project</a>
              </li>
            </ul>

          </div>
        </nav>
      </div>

      {/* Second Navbar (updated) */}
      <header className="header">
        <nav className="header-navbar container-fluid">
          <div className="header-navbar_content container">
            <ul className="header-navbar_menu">
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('find-jobs')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Find Jobs▾</a>
                {openDropdown === 'find-jobs' && (
                  <ul className="dropdown-menu">
                    <li><a href="#full-time">Full-Time Jobs</a></li>
                    <li><a href="#part-time">Part-Time Jobs</a></li>
                    <li><a href="#remote">Remote Jobs</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('hire-freelancers')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Hire Freelancers▾</a>
                {openDropdown === 'hire-freelancers' && (
                  <ul className="dropdown-menu">
                    <li><a href="#web-dev">Web Developers</a></li>
                    <li><a href="#mobile-dev">Mobile App Developers</a></li>
                    <li><a href="#software-dev">Software Developers</a></li>
                    <li><a href="#ui-ux-designers">UI/UX Designers</a></li>
                    <li><a href="#graphic-designers">Graphic Designers</a></li>
                    <li><a href="#writers">Content Writers</a></li>
                    <li><a href="#editors">Editors & Proofreaders</a></li>
                    <li><a href="#digital-marketers">Digital Marketers</a></li>
                    <li><a href="#seo-experts">SEO Experts</a></li>
                    <li><a href="#social-media-managers">Social Media Managers</a></li>
                    <li><a href="#video-editors">Video Editors</a></li>
                    <li><a href="#animators">Animators</a></li>
                    <li><a href="#data-scientists">Data Scientists</a></li>
                    <li><a href="#ai-ml-experts">AI & Machine Learning Experts</a></li>
                    <li><a href="#blockchain-developers">Blockchain Developers</a></li>
                    <li><a href="#virtual-assistants">Virtual Assistants</a></li>
                    <li><a href="#customer-support">Customer Support Specialists</a></li>
                    <li><a href="#accountants">Accountants & Bookkeepers</a></li>
                    <li><a href="#legal-consultants">Legal Consultants</a></li>
                    <li><a href="#business-consultants">Business Consultants</a></li>
                    <li><a href="#translation">Translators</a></li>
                    <li><a href="#voice-over">Voice Over Artists</a></li>
                    <li><a href="#music-producers">Music Producers</a></li>
                    <li><a href="#game-developers">Game Developers</a></li>
                    <li><a href="#ecommerce-experts">E-commerce Experts</a></li>
                    <li><a href="#architects">Architects</a></li>
                    <li><a href="#engineers">Engineers</a></li>
                    <li><a href="#scientists">Scientists</a></li>
                    <li><a href="#more">See More...</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('how-it-works')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">How It Works▾</a>
                {openDropdown === 'how-it-works' && (
                  <ul className="dropdown-menu">
                    <li><a href="#freelancers">For Freelancers</a></li>
                    <li><a href="#clients">For Clients</a></li>
                    <li><a href="#payment">Payment Protection</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('browse-jobs')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Browse Jobs▾</a>
                {openDropdown === 'browse-jobs' && (
                  <ul className="dropdown-menu">
                    <li><a href="#web-dev">Web Development</a></li>
                    <li><a href="#design">Graphic Design</a></li>
                    <li><a href="#writing">Content Writing</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('why-us')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Why Us?▾</a>
                {openDropdown === 'why-us' && (
                  <ul className="dropdown-menu">
                    <li><a href="#trust">Trusted by Millions</a></li>
                    <li><a href="#security">Secure Payments</a></li>
                    <li><a href="#reviews">Customer Reviews</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('resources')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Resources▾</a>
                {openDropdown === 'resources' && (
                  <ul className="dropdown-menu">
                    <li><a href="#blog">Freelance Blog</a></li>
                    <li><a href="#guides">Guides & Tutorials</a></li>
                    <li><a href="#legal">Legal & Policies</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('membership')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Membership▾</a>
                {openDropdown === 'membership' && (
                  <ul className="dropdown-menu">
                    <li><a href="#pricing">Pricing & Plans</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#compare">Compare Plans</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('community')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Community▾</a>
                {openDropdown === 'community' && (
                  <ul className="dropdown-menu">
                    <li><a href="#forums">Forums</a></li>
                    <li><a href="#events">Events & Meetups</a></li>
                    <li><a href="#awards">Freelancer Awards</a></li>
                  </ul>
                )}
              </li>
              <li
                className="header-navbar_item dropdown"
                onMouseEnter={() => handleDropdown('support-faqs')}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a href="#">Support/FAQs▾</a>
                {openDropdown === 'support-faqs' && (
                  <ul className="dropdown-menu">
                    <li><a href="#help-center">Help Center</a></li>
                    <li><a href="#contact">Contact Support</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-container container-fluid">
          <div className="header-content container">
            <h1 className="header-title">
              Hire the best freelancers for any job, online.
            </h1>
            <ul className="header-desc_menu">
              <li className="header-desc_item">
                World's largest freelance marketplace
              </li>
              <li className="header-desc_item">Any job you can possibly think of</li>
              <li className="header-desc_item">
                Save up to 90% & get quotes for free
              </li>
              <li className="header-desc_item">Pay only when you're 100% happy</li>
            </ul>
            <div className="header-btn_container">
              <a href="#" className="header-btn">Hire a Freelancer</a>
              <a href="#" className="header-btn">Earn Money Freelancing</a>
            </div>
          </div>
        </div>
      </header>

      <section className="brands">
        <div className="brands-content container">
          <img src="./images/amazon_logo2.svg" alt="logo" />
          <img src="./images/facebook-corporate-logo2.svg" alt="logo" />
          <img src="./images/deloitte-logo2.svg" alt="logo" />
          <img src="./images/nasa-logo3.svg" alt="logo" />
          <img src="./images/ibm-logo2.svg" alt="logo" />
          <img src="./images/airbus-logo2.svg" alt="logo" />
          <img src="./images/telstra-logo.svg" alt="logo" />
          <img src="./images/fujitsu-logo.svg" alt="logo" />
          <img src="./images/google-logo.svg" alt="logo" />
        </div>
        <p>As used by</p>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="images/amazon_logo2.svg" alt="logo" />
              <img src="images/facebook-corporate-logo2.svg" alt="logo" />
              <img src="images/deloitte-logo2.svg" alt="logo" />
            </div>
            <div className="swiper-slide">
              <img src="images/nasa-logo3.svg" alt="logo" />
              <img src="images/ibm-logo2.svg" alt="logo" />
              <img src="images/airbus-logo2.svg" alt="logo" />
            </div>
            <div className="swiper-slide">
              <img src="images/telstra-logo.svg" alt="logo" />
              <img src="images/fujitsu-logo.svg" alt="logo" />
              <img src="images/google-logo.svg" alt="logo" />
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>

      <section className="description container">
        <h1 className="description-title">Need something done?</h1>
        <ul className="description-cards">
          <li className="description-card">
            <div className="description-card_header">
              <img src="/images/section-images/post-a-project.svg" alt="image" />
              <h3>Post a job</h3>
            </div>
            <div className="description-body">
              <p>
                It’s free and easy to post a job. Simply fill in a title,
                description and budget and competitive bids come within minutes.
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/work.svg" alt="image" />
              <h3>
                Choose <br />
                freelancers
              </h3>
            </div>
            <div className="description-body">
              <p>
                No job is too big or too small. We've got freelancers for jobs of
                any size or budget, across 1800+ skills. No job is too complex. We
                can get it done!
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/pay-safely.svg" alt="image" />
              <h3>Pay safely</h3>
            </div>
            <div className="description-body">
              <p>
                Only pay for work when it has been completed and you're 100%
                satisfied with the quality using our milestone payment system.
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/about-me.svg" alt="image" />
              <h3>We’re here to help</h3>
            </div>
            <div className="description-body">
              <p>
                Our talented team of recruiters can help you find the best
                freelancer for the job and our technical co-pilots can even manage
                the project for you.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="description container">
        <h1 className="description-title">What's great about it?</h1>
        <ul className="description-cards">
          <li className="description-card">
            <div className="description-card_header">
              <img
                src="images/section-images/browse-portfolios.svg"
                alt="image"
              />
              <h3>Browse portfolios</h3>
            </div>
            <div className="description-body">
              <p>
                Find professionals you can trust by browsing their samples of
                previous work and reading their profile reviews.
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/bids-alt.svg" alt="image" />
              <h3>Fast bids</h3>
            </div>
            <div className="description-body">
              <p>
                Receive obligation free quotes from our talented freelancers fast.
                80% of projects get bid on within 60 seconds.
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/rank-higher.svg" alt="image" />
              <h3>Quality work</h3>
            </div>
            <div className="description-body">
              <p>
                CouchCoin.com has by far the largest pool of quality freelancers
                globally- over 50 million to choose from.
              </p>
            </div>
          </li>
          <li className="description-card">
            <div className="description-card_header">
              <img src="images/section-images/track-progress.svg" alt="image" />
              <h3>Track progress</h3>
            </div>
            <div className="description-body">
              <p>
                Keep up-to-date and on-the-go with our time tracker, and mobile
                app. Always know what freelancers are up to.
              </p>
            </div>
          </li>
        </ul>
      </section>



      <section className="description container">
        <h1 className="description-title product-title">
          Make it Real with <span className="highlight">CouchCoin</span>.
        </h1>
        <p className="description-paragraph">
          Explore over <span className="highlight">1800+ skills</span> and bring your ideas to life.
        </p>

        <ul className="description-cards products">
          {[
            { image: "logo-design-v2.jpg", title: "Logo Design", price: "$30", duration: "1 day" },
            { image: "package-design-1-v2.jpg", title: "Package Design", price: "$50", duration: "2 days" },
            { image: "mobile-design-1-v2.jpg", title: "Mobile App Design", price: "$100", duration: "3 days" },
            { image: "wordpress-1.jpg", title: "WordPress Development", price: "$150", duration: "5 days" },
            { image: "website-1.jpg", title: "Website Design", price: "$200", duration: "7 days" },
            { image: "illustration-v2.jpg", title: "Illustration", price: "$40", duration: "1 day" },
            { image: "3d-modeling.jpg", title: "3D Modeling", price: "$120", duration: "4 days" },
            { image: "online.jpg", title: "Online Writing", price: "$30", duration: "1 day" },
            { image: "graphic-design-2.jpg", title: "Graphic Design", price: "$60", duration: "2 days" },
          ].map((item, index) => (
            <li key={index} className="description-card">
              <div className="description-card_header product-header">
                <img
                  className="product-image"
                  src={`images/product-images/${item.image}`}
                  alt={item.title}
                />
                <span className="product-button">Discover More</span>
              </div>
              <div className="description-body">
                <p className="product-info">
                  {item.title}.<br />{item.price} in {item.duration}.
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="cta-section">
          <a href="#" className="description-btn">View More Projects</a>
          <p className="cta-text">Join thousands of freelancers and clients making it real with CouchCoin.</p>
        </div>
      </section>

      <section className="information">
        <aside className="left-section">
          <div className="left-section_content">
            <h2 className="information-title">CouchCoin API.</h2>
            <h3 className="information-desc">50 million professionals <br /> on demand</h3>
            <p className="information-paragraph">
              Why hire people when you can simply integrate our talented <br />
              cloud workforce instead?
            </p>
            <a href="#" className="information-btn">View Documentation</a>
          </div>
        </aside>
        <aside className="right-section">
          <div className="right-section_content">
            <h2 className="information-title">CouchCoin Enterprise.</h2>
            <h3 className="information-desc">
              Company budget?<br />Get more done for less
            </h3>
            <p className="information-paragraph">
              Use our workforce of 50 million to help your business <br />
              achieve more.
            </p>
            <a href="#" className="information-btn">Contact Us</a>
          </div>
        </aside>
      </section>


    </div>
  );
};

export default Home;

