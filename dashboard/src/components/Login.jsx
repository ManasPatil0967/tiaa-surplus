import React, { useState, useEffect } from 'react';
import "../styles/login.css";
import { login } from '../lib/firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '../lib/firebase/auth';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard');
      }
    });
    }, []);

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(username, password);
        navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };   
  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-header">LOGIN</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;
