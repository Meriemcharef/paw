
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate an asynchronous login request (replace with actual authentication logic)
    try {
      if (username.trim() === '' || password.trim() === '') {
        throw new Error('Please enter both username and password.');
      }

      // Add your actual login logic here
      // For example, you can use a library like axios to make an HTTP request to your authentication endpoint.
      // const response = await axios.post('/api/login', { username, password });

      // Assuming a successful login
      // const userData = response.data; // Adjust based on your authentication response structure

      console.log(`Logged in as ${username}`);
      setError(''); // Reset any previous errors
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

