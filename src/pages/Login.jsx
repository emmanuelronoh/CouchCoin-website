import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for navigation
import axios from 'axios'; // Import axios for making HTTP requests
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after successful login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    const { email, password } = formData;

    // Basic validation for empty fields
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Send the login request to your backend
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        email,
        password,
      });

      if (response.status === 200) {
        // Store the JWT token in localStorage
        localStorage.setItem('authToken', response.data.token);

        // Optionally, you can store the user details or other relevant data
        // localStorage.setItem('user', JSON.stringify(response.data.user));

        alert('Login successful!');
        navigate('/dashboard'); // Redirect to the dashboard or protected page
      }
    } catch (error) {
      // Handle error, maybe invalid credentials or server issues
      if (error.response) {
        setError(error.response.data.detail || 'An error occurred during login.');
      } else {
        setError('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="login-button">
              Login
            </button>
            {error && <div className="error-message">{error}</div>}
          </form>

          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
