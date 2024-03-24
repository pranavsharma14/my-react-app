import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Paper, Avatar, Checkbox, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };
  

  return (
    <div>
      <Paper className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" gutterBottom className='typography'>
          Login
        </Typography>
        <form onSubmit={handleLogin} action='POST'>
          <FormControl fullWidth margin="normal" className="form-control">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal" className="form-control">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label="Remember Me"
            className="checkbox-container"
            classes={{ label: 'checkbox-label' }}
          />
          
          <Button variant="contained" color="primary" type="submit" className="button" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;