import React, { useState } from "react";
import { Link } from "react-router";
import { IoMailOutline, IoArrowBack, IoCheckmarkCircle } from "react-icons/io5";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password:", email);
    setSubmitted(true);
  };

  return (
    <div className="auth-page">
      {/* Left - Decorative Panel */}
      <div className="auth-side-panel">
        <div className="auth-side-content">
          <Link to="/" className="auth-logo">
            anwesha
          </Link>
          <h2>Don't worry!</h2>
          <p>
            It happens to the best of us. Enter your email and we'll send you a
            link to reset your password and get back to the community.
          </p>
          <div className="auth-side-stats">
            <div className="auth-side-stat">
              <span className="auth-side-stat-val">24/7</span>
              <span className="auth-side-stat-label">Support Available</span>
            </div>
            <div className="auth-side-stat">
              <span className="auth-side-stat-val">Secure</span>
              <span className="auth-side-stat-label">Reset Process</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="auth-form-panel">
        <div className="auth-form-wrapper">
          <Link to="/signin" className="back-link">
            <IoArrowBack /> Back to Sign In
          </Link>

          {!submitted ? (
            <>
              <div className="auth-form-header">
                <div className="auth-icon-circle">
                  <IoMailOutline />
                </div>
                <h1>Forgot Password?</h1>
                <p>
                  No worries! Enter the email address associated with your
                  account and we'll send you a reset link.
                </p>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="auth-submit-btn">
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="auth-success">
              <div className="success-icon">
                <IoCheckmarkCircle />
              </div>
              <h2>Check your email</h2>
              <p>
                We've sent a password reset link to <strong>{email}</strong>.
                Please check your inbox and follow the instructions.
              </p>
              <p className="success-sub">
                Didn't receive the email?{" "}
                <button
                  type="button"
                  className="resend-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Click to resend
                </button>
              </p>
              <Link
                to="/signin"
                className="auth-submit-btn"
                style={{
                  textAlign: "center",
                  display: "block",
                  marginTop: "24px",
                }}
              >
                Back to Sign In
              </Link>
            </div>
          )}

          <p className="auth-switch">
            Remember your password? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
