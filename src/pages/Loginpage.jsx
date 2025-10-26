import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import * as authService from '../services/authService';
import AuthForm from '../components/AuthForm'; 

const LoginPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login: loginContext } = useAuth(); // Get the login function from our global context

  // This function is passed to the reusable AuthForm component
  const handleLogin = async ({ email, password }) => {
    try {
      setIsLoading(true);
      setError(null);

      // 1. Call the frontend service to make the API request
      const { user, token } = await authService.login(email, password);

      // 2. If successful, update the global auth state
      loginContext(user, token);

      // 3. Redirect to the dashboard
      navigate('/dashboard');

    } catch (err) {
      // 4. If it fails, show an error message
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <AuthForm
        onSubmit={handleLogin}
        submitText="Login"
        isLoading={isLoading}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;