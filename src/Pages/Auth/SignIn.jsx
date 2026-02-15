import React, { useState } from "react";
import { Link } from "react-router";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoGoogle,
} from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Auth.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", formData);
  };

  return (
    <div className="auth-page">
      {/* Left - Decorative Panel */}
      <div className="auth-side-panel">
        <div className="auth-side-content">
          <Link to="/" className="auth-logo">
            anwesha
          </Link>
          <h2>Welcome back!</h2>
          <p>
            Sign in to continue helping others, earning rewards, and being part
            of our amazing community.
          </p>
          <div className="auth-side-stats">
            <div className="auth-side-stat">
              <span className="auth-side-stat-val">50K+</span>
              <span className="auth-side-stat-label">Tasks Completed</span>
            </div>
            <div className="auth-side-stat">
              <span className="auth-side-stat-val">10K+</span>
              <span className="auth-side-stat-label">Active Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="auth-form-panel">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1>Sign In</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          {/* Social Login */}
          <div className="social-auth">
            <button className="social-auth-btn" type="button">
              <IoLogoGoogle />
              <span>Google</span>
            </button>
            <button className="social-auth-btn" type="button">
              <FaGithub />
              <span>GitHub</span>
            </button>
            <button className="social-auth-btn" type="button">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </button>
          </div>

          <div className="auth-divider">
            <span>or sign in with email</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <IoMailOutline className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-label-row">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
              <div className="input-wrapper">
                <IoLockClosedOutline className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>

            <div className="input-group-checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign In
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
