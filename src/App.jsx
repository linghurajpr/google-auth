import React, { useState } from 'react';
import { signInWithGoogle, logout } from './firebase-config';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Google Authentication</h1>
      </header>
      <main>
        {!user ? (
          <div className="container">
            <h2>Login</h2>
            <form id="loginForm">
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" onClick={handleLogin}>
                Login with Google
              </button>
              <div className="register">
                <p>
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="user-details">
            <h2>Welcome, {user.displayName}!</h2>
            <p>Email: {user.email}</p>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </main>
      
    </div>
  );
}

export default App
