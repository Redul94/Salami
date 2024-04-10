import React, { useState, FormEvent } from 'react';

const Log = () => {
  // State variables to hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State variable to track whether login is successful or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if username and password match some hardcoded values (demo purposes)
    if (username === 'demo' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Log;
