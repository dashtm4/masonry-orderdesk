import React from 'react';

import { Container, Paper, Switch, Box } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

import BaseSearchInput from '../../BaseSearchInput';
import { PrimaryButton, SecondaryButton } from '../../buttons';
import { useStyles } from './style';

import './styles.scss';
import Logo from '../../../assets/images/logo.png';

const MENUBAR_ITEMS = [
  { title: 'Building Material' },
  { title: 'Learn' },
  { title: 'Blog' },
];

const MenuBar = () => {
  const classes = useStyles();

  return (
    <div id="menubar">
      <Container>
        {/* <div className="image-wrapper">
          <img src={require('../../../../assets/images/logo.png')} alt="logo"/>
        </div> */}
        <div className="menubar__links">
          <img className="logo" src={Logo} />
          <BaseSearchInput />
          {MENUBAR_ITEMS.map((item, itemIndex) => (
            <div className="menubar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
          <Paper variant="outlined" className={classes.bgSecondary}>
            <Box component="span" className={classes.delivery}>Delivery</Box>
            <Switch defaultChecked color="default" />  
          </Paper>
          <PrimaryButton className={classes.button}>
            <AccountCircle />
          </PrimaryButton>
          <SecondaryButton className={classes.button}>
            <ShoppingCart />
          </SecondaryButton>
        </div>
      </Container>
    </div>
  )
}

export default MenuBar;
