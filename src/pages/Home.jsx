// import React from 'react';
// import './STYLES1/style.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import "swiper/css"; // Core Swiper styles
// import "swiper/css/navigation"; // Navigation styles (if needed)
// import "swiper/css/pagination"; // Pagination styles (if needed)

// const Home = () => {
//   return (
//     <div className="home">
//       {/* Brands Section */}
//       <section className="brands">
//         <div className="brands-content container">
//           <img src="./images/amazon_logo2.svg" alt="logo" />
//           <img src="./images/facebook-corporate-logo2.svg" alt="logo" />
//           <img src="./images/deloitte-logo2.svg" alt="logo" />
//           <img src="./images/nasa-logo3.svg" alt="logo" />
//           <img src="./images/ibm-logo2.svg" alt="logo" />
//           <img src="./images/airbus-logo2.svg" alt="logo" />
//           <img src="./images/telstra-logo.svg" alt="logo" />
//           <img src="./images/fujitsu-logo.svg" alt="logo" />
//           <img src="./images/google-logo.svg" alt="logo" />
//         </div>
//         <p>As used by</p>
//         <div className="swiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="images/amazon_logo2.svg" alt="logo" />
//               <img src="images/facebook-corporate-logo2.svg" alt="logo" />
//               <img src="images/deloitte-logo2.svg" alt="logo" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/nasa-logo3.svg" alt="logo" />
//               <img src="images/ibm-logo2.svg" alt="logo" />
//               <img src="images/airbus-logo2.svg" alt="logo" />
//             </div>
//             <div className="swiper-slide">
//               <img src="images/telstra-logo.svg" alt="logo" />
//               <img src="images/fujitsu-logo.svg" alt="logo" />
//               <img src="images/google-logo.svg" alt="logo" />
//             </div>
//           </div>
//           <div className="swiper-button-prev"></div>
//           <div className="swiper-button-next"></div>
//         </div>
//       </section>

//       {/* Description Sections */}
//       <section className="description container">
//         <h1 className="description-title">Need something done?</h1>
//         <ul className="description-cards">
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="/images/section-images/post-a-project.svg" alt="image" />
//               <h3>Post a job</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 It’s free and easy to post a job. Simply fill in a title,
//                 description and budget and competitive bids come within minutes.
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/work.svg" alt="image" />
//               <h3>
//                 Choose <br />
//                 freelancers
//               </h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 No job is too big or too small. We've got freelancers for jobs of
//                 any size or budget, across 1800+ skills. No job is too complex. We
//                 can get it done!
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/pay-safely.svg" alt="image" />
//               <h3>Pay safely</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 Only pay for work when it has been completed and you're 100%
//                 satisfied with the quality using our milestone payment system.
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/about-me.svg" alt="image" />
//               <h3>We’re here to help</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 Our talented team of recruiters can help you find the best
//                 freelancer for the job and our technical co-pilots can even manage
//                 the project for you.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       <section className="description container">
//         <h1 className="description-title">What's great about it?</h1>
//         <ul className="description-cards">
//           <li className="description-card">
//             <div className="description-card_header">
//               <img
//                 src="images/section-images/browse-portfolios.svg"
//                 alt="image"
//               />
//               <h3>Browse portfolios</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 Find professionals you can trust by browsing their samples of
//                 previous work and reading their profile reviews.
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/bids-alt.svg" alt="image" />
//               <h3>Fast bids</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 Receive obligation free quotes from our talented freelancers fast.
//                 80% of projects get bid on within 60 seconds.
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/rank-higher.svg" alt="image" />
//               <h3>Quality work</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 CouchCoin.com has by far the largest pool of quality freelancers
//                 globally- over 50 million to choose from.
//               </p>
//             </div>
//           </li>
//           <li className="description-card">
//             <div className="description-card_header">
//               <img src="images/section-images/track-progress.svg" alt="image" />
//               <h3>Track progress</h3>
//             </div>
//             <div className="description-body">
//               <p>
//                 Keep up-to-date and on-the-go with our time tracker, and mobile
//                 app. Always know what freelancers are up to.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </section>

//       <section className="description container">
//         <h1 className="description-title product-title">
//           Make it Real with <span className="highlight">CouchCoin</span>.
//         </h1>
//         <p className="description-paragraph">
//           Explore over <span className="highlight">1800+ skills</span> and bring your ideas to life.
//         </p>

//         <ul className="description-cards products">
//           {[
//             { image: "logo-design-v2.jpg", title: "Logo Design", price: "$30", duration: "1 day" },
//             { image: "package-design-1-v2.jpg", title: "Package Design", price: "$50", duration: "2 days" },
//             { image: "mobile-design-1-v2.jpg", title: "Mobile App Design", price: "$100", duration: "3 days" },
//             { image: "wordpress-1.jpg", title: "WordPress Development", price: "$150", duration: "5 days" },
//             { image: "website-1.jpg", title: "Website Design", price: "$200", duration: "7 days" },
//             { image: "illustration-v2.jpg", title: "Illustration", price: "$40", duration: "1 day" },
//             { image: "3d-modeling.jpg", title: "3D Modeling", price: "$120", duration: "4 days" },
//             { image: "online.jpg", title: "Online Writing", price: "$30", duration: "1 day" },
//             { image: "graphic-design-2.jpg", title: "Graphic Design", price: "$60", duration: "2 days" },
//           ].map((item, index) => (
//             <li key={index} className="description-card">
//               <div className="description-card_header product-header">
//                 <img
//                   className="product-image"
//                   src={`images/product-images/${item.image}`}
//                   alt={item.title}
//                 />
//                 <span className="product-button">Discover More</span>
//               </div>
//               <div className="description-body">
//                 <p className="product-info">
//                   {item.title}.<br />{item.price} in {item.duration}.
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>

//         <div className="cta-section">
//           <a href="#" className="description-btn">View More Projects</a>
//           <p className="cta-text">Join thousands of freelancers and clients making it real with CouchCoin.</p>
//         </div>
//       </section>

//       <section className="information">
//         <aside className="left-section">
//           <div className="left-section_content">
//             <h2 className="information-title">CouchCoin API.</h2>
//             <h3 className="information-desc">50 million professionals <br /> on demand</h3>
//             <p className="information-paragraph">
//               Why hire people when you can simply integrate our talented <br />
//               cloud workforce instead?
//             </p>
//             <a href="#" className="information-btn">View Documentation</a>
//           </div>
//         </aside>
//         <aside className="right-section">
//           <div className="right-section_content">
//             <h2 className="information-title">CouchCoin Enterprise.</h2>
//             <h3 className="information-desc">
//               Company budget?<br />Get more done for less
//             </h3>
//             <p className="information-paragraph">
//               Use our workforce of 50 million to help your business <br />
//               achieve more.
//             </p>
//             <a href="#" className="information-btn">Contact Us</a>
//           </div>
//         </aside>
//       </section>
//     </div>
//   );
// };

// export default Home;


import { FaSearch, FaBriefcase, FaUsers } from "react-icons/fa";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to CouchCoin</h1>
        <p>Connecting freelancers with clients seamlessly</p>
        <button className="btn">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose CouchCoin?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="feature-card">
            <FaSearch className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3>Find Work Easily</h3>
            <p>Browse thousands of freelance jobs that match your skills.</p>
          </div>
          <div className="feature-card">
            <FaBriefcase className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3>Secure Payments</h3>
            <p>Guaranteed payments with our secure escrow system.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3>Join a Global Community</h3>
            <p>Connect with clients and freelancers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Freelancer Showcase */}
      <section className="freelancers">
        <h2>Top Freelancers</h2>
        <p>Discover the best talent for your projects.</p>
        <button className="btn">Explore Freelancers</button>
      </section>
    </div>
  );
}