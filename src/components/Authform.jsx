import React, { useState } from 'react';

const AuthForm = ({ onSubmit, submitText, isLoading, isRegister = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for registration

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      onSubmit({ email, password, name });
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isRegister && (
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : submitText}
      </button>
    </form>
  );
};

export default AuthForm;