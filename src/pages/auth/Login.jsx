import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError('All fields required');
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 1000));
    if (email === 'admin@hrms.com' && password === 'password123') {
      localStorage.setItem('token', 'mock-token');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign In</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            disabled={loading}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div style={styles.footer}>
          <a href="/forgot-password" style={styles.link}>Forgot password?</a>
          <span style={styles.separator}>|</span>
          <a href="/register" style={styles.link}>Create account</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '10px',
  },
  card: {
    background: 'white',
    padding: '20px 30px 25px',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '360px',
  },
  title: {
    margin: '0 0 16px 0',
    textAlign: 'center',
    color: '#333',
    fontSize: '20px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    marginBottom: '10px',
    border: '2px solid #e0e0e0',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
    height: '38px',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '8px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    height: '38px',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  error: {
    background: '#fee',
    color: '#c00',
    padding: '6px 10px',
    borderRadius: '4px',
    marginBottom: '12px',
    fontSize: '12px',
    textAlign: 'center',
  },
  footer: {
    marginTop: '14px',
    textAlign: 'center',
    fontSize: '12px',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
  },
  separator: {
    margin: '0 8px',
    color: '#ccc',
  },
};

export default Login;