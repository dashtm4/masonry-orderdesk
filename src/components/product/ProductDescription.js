import React, { useState } from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';

const tabs = ['description', 'specification', 'review'];

const ProductDescription = ({ product }) => {
  const [tab, setTab] = useState(tabs[0])
  const classes = useStyles();

  return (
    <>
      <Paper variant="outlined">
        <Grid container>
          {tabs.map((tab) => (
            <Grid
              item
              xs={4}
              onClick={() => setTab(tab)}
              key={tab}
              className={classes.tab}
            >
              {tab}
            </Grid>
          ))}
        </Grid>
      </Paper>
      {
        product[tab]
          ? <Typography variant="body1">{product[tab]}</Typography>
          : <Typography variant="body1" className={classes.emptyWrapper}>No {tab} for this product</Typography>
      }
    </>
  );
};

export default ProductDescription
