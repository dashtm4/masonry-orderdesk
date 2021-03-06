import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import BaseSearchInput from '../../BaseSearchInput';
import Logo from '../../../assets/images/logo.png';

import './styles.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <div>
          <img src={Logo} />
          <BaseSearchInput style={{float: 'right'}} />
        </div>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6}>
            <Typography className="text-primary">About Us</Typography>
            <p>Return Policy</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </Grid>
          <Grid item lg={3} md={6}>
            <Typography className="text-primary">Contact Us</Typography>
            <p>
              <span className="text-primary">P</span> &nbsp; 1-866-421-1339
            </p>
            <p>
              <span className="text-primary">E</span> &nbsp; contact@masonryorder.ca
            </p>
          </Grid>
          <Grid item lg={3} md={6}>
            <Typography className="text-primary">Information</Typography>
            <p>About Us</p>
            <p>Blog</p>
            <p>FAQ</p>
          </Grid>
          <Grid item lg={3} md={6}>
            <Typography className="text-primary">Account</Typography>
            <p>Login</p>
            <p>Sign Up</p>
            <p>Orders</p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;
