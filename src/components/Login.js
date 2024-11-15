import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const Logo = styled('img')({
  width: 120,
  marginBottom: 16,
});

const CompanyName = styled(Typography)(({ theme }) => ({
  '& .highlight': {
    color: theme.palette.primary.main,
  },
}));

function Login({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <StyledPaper elevation={3}>
      <Logo src={`${process.env.PUBLIC_URL}neuralix-logo.jpg`} alt="Neuralix Logo" />
      <CompanyName variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        neural<span className="highlight">ix.ai</span>
      </CompanyName>
      {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'normal' }}>
        Template Editor
      </Typography> */}
      <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 2 }}>
        Log in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
        <Link component="button" variant="body2" onClick={onSwitchToSignup} sx={{ textAlign: 'center', display: 'block' }}>
          Don't have an account? Sign Up
        </Link>
      </Box>
    </StyledPaper>
  );
}

export default Login;