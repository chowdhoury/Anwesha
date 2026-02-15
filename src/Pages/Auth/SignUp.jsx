import React, { useState } from "react";
import { Link } from "react-router";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoGoogle,
} from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Auth.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up:", formData);
  };

  return (
    <div className="auth-page">
      {/* Left - Decorative Panel */}
      <div className="auth-side-panel">
        <div className="auth-side-content">
          <Link to="/" className="auth-logo">
            anwesha
          </Link>
          <h2>Join our community!</h2>
          <p>
            Create your free account and start earning digital rewards by
            helping others. No payments, just skills and collaboration.
          </p>
          <div className="auth-side-features">
            <div className="auth-side-feature">
              <span className="feature-dot"></span>
              <span>Earn rewards by helping others</span>
            </div>
            <div className="auth-side-feature">
              <span className="feature-dot"></span>
              <span>Use rewards to get help in return</span>
            </div>
            <div className="auth-side-feature">
              <span className="feature-dot"></span>
              <span>100% free — no money involved</span>
            </div>
            <div className="auth-side-feature">
              <span className="feature-dot"></span>
              <span>Build your reputation &amp; skills</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="auth-form-panel">
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1>Create Account</h1>
            <p>Start your journey with Anwesha today</p>
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
            <span>or sign up with email</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <div className="input-wrapper">
                  <IoPersonOutline className="input-icon" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-wrapper">
                  <IoPersonOutline className="input-icon" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

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
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <IoLockClosedOutline className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
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

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <IoLockClosedOutline className="input-icon" />
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>

            <div className="input-group-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the{" "}
                <Link to="/" className="inline-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/" className="inline-link">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
