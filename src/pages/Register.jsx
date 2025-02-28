import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for navigation
import axios from 'axios'; // Import axios
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isFreelancer: false, // Add field for freelancer
    isClient: false,     // Add field for client
  });

  const [error, setError] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const navigate = useNavigate(); // For navigation on successful signup

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
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

    // Prepare data in the form that the backend expects (similar to the curl command)
    const formDataForRequest = new URLSearchParams();
    formDataForRequest.append('username', username);
    formDataForRequest.append('email', email);
    formDataForRequest.append('password1', password);  // Use password1
    formDataForRequest.append('password2', confirmPassword);  // Use password2
    formDataForRequest.append('is_freelancer', isFreelancer);
    formDataForRequest.append('is_client', isClient);

    // Make the API call to the backend
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/registration/', formDataForRequest, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',  // Send data as form-encoded
        }
      });

      if (response.status === 201) {
        alert('Sign Up successful!');
        navigate('/login'); // Redirect to login after successful signup
      }
    } catch (error) {
      setError('Registration failed: ' + error.response?.data?.detail || error.message);
    }
  };

  const handlePasswordReset = (email) => {
    alert('Password reset functionality not implemented!');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Additional checkboxes for freelancer and client */}
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="isFreelancer"
                  checked={formData.isFreelancer}
                  onChange={handleChange}
                />
                I am a Freelancer
              </label>
              <label>
                <input
                  type="checkbox"
                  name="isClient"
                  checked={formData.isClient}
                  onChange={handleChange}
                />
                I am a Client
              </label>
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
            {error && <div className="error-message">{error}</div>}
            {isPasswordReset && <div className="success-message">Check your email for password reset instructions.</div>}
          </form>

          <div className="forgot-password-link">
            <Link to="#" onClick={() => handlePasswordReset(formData.email)}>Forgot Password?</Link>
          </div>

          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
