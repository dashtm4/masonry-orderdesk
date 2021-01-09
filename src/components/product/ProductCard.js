import React from 'react';

import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

import { PrimaryButton } from '../buttons';
import { useStyles } from './styles';

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        component="img"
        image={product.images[0]}
        title={product.name}
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h5">
              {product.category}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.materialWrapper}>
            <div>
              Material:
            </div>
            <div className="text-primary">
              {product.material}
            </div>
          </Grid>
        </Grid>
        <p>
          {product.name}
        </p>
        <p>
          Manufacturer: {product.manufacturer}
        </p>
        <p>
          Available Size: {product.sizes.join(', ')}
        </p>
        <p className="text-secondary">
          Turn Location on to view prices in your region
          <CheckCircle className={classes.floatRight} />
        </p>
      </CardContent>
      <CardActions>
        <PrimaryButton className={classes.btnViewDetails}>
          View Details
        </PrimaryButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
