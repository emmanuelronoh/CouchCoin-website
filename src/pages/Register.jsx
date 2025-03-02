import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isFreelancer: false,
    isClient: false,
  });

  const [error, setError] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { username, email, password, confirmPassword, isFreelancer, isClient } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        username,
        email,
        password,
        is_freelancer: isFreelancer,
        is_client: isClient,
      });

      if (response.status === 201) {
        setIsVerificationSent(true);
      }
    } catch (error) {
      setError('Registration failed: ' + (error.response?.data?.detail || error.message));
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setError('Please enter the verification code.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/verify-email/', {
        email: formData.email,
        code: verificationCode,
      });

      if (response.status === 200) {
        setIsVerified(true);
        setTimeout(() => {
          navigate('/login'); // Redirect to login after successful verification
        }, 2000);
      }
    } catch (error) {
      setError('Verification failed: ' + (error.response?.data?.detail || error.message));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-page">
        <div className="signup-box">
          {isVerified ? (
            <div className="verification-success">
              <h2>✅ Verification Successful!</h2>
              <p>You will be redirected to the login page shortly...</p>
            </div>
          ) : isVerificationSent ? (
            <div className="verification-message">
              <h2>Email Verification</h2>
              <p>Enter the 6-digit code sent to <strong>{formData.email}</strong>.</p>

              <input
                type="text"
                value={verificationCode}
                onChange={handleCodeChange}
                placeholder="Enter verification code"
                maxLength="6"
                className="verification-input"
              />

              <button onClick={handleVerifyCode} className="verify-button">Verify</button>
              <p>Didn't receive a code? <button onClick={handleSubmit} className="resend-button">Resend Code</button></p>
              <Link to="/login" className="login-link">Go to Login</Link>
            </div>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="input-group">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <div className="input-group">
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
                </div>

                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" name="isFreelancer" checked={formData.isFreelancer} onChange={handleChange} />
                    I am a Freelancer
                  </label>
                  <label>
                    <input type="checkbox" name="isClient" checked={formData.isClient} onChange={handleChange} />
                    I am a Client
                  </label>
                </div>

                <button type="submit" className="signup-button">Sign Up</button>
                {error && <div className="error-message">{error}</div>}
              </form>

              <div className="forgot-password-link">
                <Link to="#">Forgot Password?</Link>
              </div>

              <div className="login-link">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
