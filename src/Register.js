import React, { useState } from 'react';
import firebase from './firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;