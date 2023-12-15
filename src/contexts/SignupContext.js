// SignupContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const SignupContext = createContext();

const SignupProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const clearForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleSignup = async () => {
    try {
      // Your signup logic here

      console.log(`Signed up as ${username}`);
      setError(''); // Reset previous errors

      // Redirect the user to the custom page after successful signup
      // Replace '/profil' with the URL of the page you want to display after signup
      navigate('/profil');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignupContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        setError,
        clearForm,
        handleSignup,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

const useSignupContext = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error('useSignupContext must be used within a SignupProvider');
  }
  return context;
};

export { SignupProvider, useSignupContext };

