import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBy, setSearchBy] = useState("title");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/photo.svg" alt="Couch-Coin Logo" className="logo-img" />
        </a>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-desktop-menu">
        <button className="nav-button">Find Talent ▾</button>
        <button className="nav-button">Find Work ▾</button>
        <button className="nav-button">Why Us</button>
        <button className="nav-button">Enterprise</button>
        <button className="nav-button">Pricing</button>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
          <div className={`search-dropdown ${dropdownOpen ? "active" : ""}`}>
            <button className="search-dropdown-button" onClick={toggleDropdown}>
              {searchBy} <FaChevronDown className="search-dropdown-icon" />
            </button>
            <div className="search-dropdown-menu">
              <div
                className="search-dropdown-item"
                onClick={() => {
                  setSearchBy("status");
                  setDropdownOpen(false);
                }}
              >
                Status
              </div>
              <div
                className="search-dropdown-item"
                onClick={() => {
                  setSearchBy("category");
                  setDropdownOpen(false);
                }}
              >
                Category
              </div>
              <div
                className="search-dropdown-item"
                onClick={() => {
                  setSearchBy("is_active");
                  setDropdownOpen(false);
                }}
              >
                Active Jobs
              </div>
              <div
                className="search-dropdown-item"
                onClick={() => {
                  setSearchBy("title");
                  setDropdownOpen(false);
                }}
              >
                Title
              </div>
              <div
                className="search-dropdown-item"
                onClick={() => {
                  setSearchBy("budget");
                  setDropdownOpen(false);
                }}
              >
                Budget
              </div>
            </div>
          </div>
        </div>
        <button className="login-button" onClick={() => navigate("/login")}>
          Log in
        </button>
        <button className="signup-button" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </div>

      {/* Mobile Menu */}
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <a href="#" className="mobile-menu-item">Find Talent</a>
          <a href="#" className="mobile-menu-item">Find Work</a>
          <a href="#" className="mobile-menu-item">Why Us</a>
          <a href="#" className="mobile-menu-item">Enterprise</a>
          <a href="#" className="mobile-menu-item">Pricing</a>
          <a href="#" className="mobile-menu-item">Log in</a>
          <a href="#" className="mobile-menu-item signup-mobile">Sign up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;