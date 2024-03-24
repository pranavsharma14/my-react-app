import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Paper, Avatar } from '@mui/material';
import './LoginPage.css';
import { AccountCircleOutlined } from '@mui/icons-material';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Re-Enter Password:', repassword);
  };

  return (
    <div>
      <Paper className='paper'>
        <Avatar className='avatar'>
          <AccountCircleOutlined/>
        </Avatar>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Re-Enter Password"
              variant="outlined"
              type="password"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Sign Up
          </Button>
        </form>
      </Paper>      
    </div>
  );
};

export default SignupPage;