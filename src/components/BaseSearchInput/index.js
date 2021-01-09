import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useStyles } from './styles';

const BaseSearchInput = ({ style }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={style}>
      <InputBase
        className={classes.input}
        placeholder="What do you need?"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  )
}

export default BaseSearchInput;
