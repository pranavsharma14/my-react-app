import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LoginPage from '../Login/LoginPage';
import SignupPage from '../Login/SignupPage';
import { Box, Typography } from '@mui/material';
import Homepage from './homepage';
import Axios from '../../axios/Axios';

export default function Project() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Home" />
          <Tab label="Login" />
          <Tab label="Signup" />
          <Tab label="Axios" />

        </Tabs>
      <TabPanel value={value} index={0}>
        <Homepage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SignupPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Axios />
      </TabPanel>
     
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
