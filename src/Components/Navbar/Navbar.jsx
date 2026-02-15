import React, { useState } from "react";
import { Link } from "react-router";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">anwesha</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li className="nav-item dropdown">
            <span className="nav-link">Get Help</span>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                Post a Request
              </Link>
              <Link to="/" className="dropdown-item">
                Browse Helpers
              </Link>
              <Link to="/" className="dropdown-item">
                Skill Marketplace
              </Link>
              <Link to="/" className="dropdown-item">
                Project Catalog
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Offer Help</span>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                Find Requests
              </Link>
              <Link to="/" className="dropdown-item">
                My Rewards
              </Link>
              <Link to="/" className="dropdown-item">
                Proposals
              </Link>
              <Link to="/" className="dropdown-item">
                Profile
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Why Anwesha</span>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                How Rewards Work
              </Link>
              <Link to="/" className="dropdown-item">
                Success Stories
              </Link>
              <Link to="/" className="dropdown-item">
                Community
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Rewards
            </Link>
          </li>
        </ul>

        {/* Right Side - Auth Buttons */}
        <div className="nav-auth">
          <Link to="/" className="btn-login">
            Log In
          </Link>
          <Link to="/" className="btn-signup">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <Link
          to="/"
          className="mobile-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Get Help
        </Link>
        <Link
          to="/"
          className="mobile-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Offer Help
        </Link>
        <Link
          to="/"
          className="mobile-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Why Anwesha
        </Link>
        <Link
          to="/"
          className="mobile-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Rewards
        </Link>
        <div className="mobile-auth">
          <Link
            to="/"
            className="btn-login"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            to="/"
            className="btn-signup"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
