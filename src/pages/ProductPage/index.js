import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import {
    ProductImages,
    ProductDetails,
    ProductDescription,
    ProductCard,
} from '../../components/product';
import { ProductMock, RelatedProductsMock } from './mock';

const ProductPage = () => {
  const [product, setProduct] = useState(ProductMock)

  return (
    <Container style={{padding: 20}}>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <ProductImages product={product} />
        </Grid>
        <Grid item md={7}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
      <div style={{margin: '20px 0'}}>
        <ProductDescription product={product} />
      </div>
      <div>
        <Typography variant="h6" style={{margin: '20px 0'}}>
          Related products
        </Typography>
        <Grid container spacing={6}>
          {RelatedProductsMock.map(p => (
            <Grid item md={4} xs={12} key={p.id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default ProductPage;
