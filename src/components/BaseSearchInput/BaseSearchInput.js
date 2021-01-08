import React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

function BaseSearchInput() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="What do you need?"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default BaseSearchInput;
