import React from 'react';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';

const SecondaryButton = ({ children, className, ...props }) => {
  const classes = useStyles();
  return <Button {...props} className={classes.secondary + ' ' + className}>
    {children}
  </Button>;
};

export default SecondaryButton;
