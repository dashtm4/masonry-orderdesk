import React from 'react';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

const PrimaryButton = ({ children, className, ...props }) => {
  const classes = useStyles();
  return <Button {...props} className={classes.primary + ' ' + className}>
    {children}
  </Button>;
};

export default PrimaryButton;
