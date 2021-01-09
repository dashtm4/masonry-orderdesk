import React, { useState } from 'react';

import {
  Paper,
  Grid,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from '@material-ui/core';
import { Facebook, Pinterest, Description } from '@material-ui/icons';

import { PrimaryButton } from '../buttons';
import { useStyles } from './styles';

const ProductDetails = ({ product }) => {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [totalPrice, setTotalPrice] = useState(8940.9);
  const [totalBricks, setTotalBricks] = useState(8500);

  const classes = useStyles();

  const handleSizeChange = (evt) => {
    setSize(evt.target.value)
  }

  const handleQuantityChange = (evt) => {
    setQuantity(evt.target.value)
  }

  const handleUnitChange = (evt) => {
    setUnit(evt.target.value)
  }

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Box className={classes.header}>
        <Box>
          <Box className={classes.category}>{product.category}</Box>
          <Box className={classes.brand}>{product.brand}</Box>
          <Box className={classes.name}>{product.name}</Box>
        </Box>
        <Box className={classes.freeSampleWrapper}>
          <span>Free Sample</span>
          <PrimaryButton className={classes.freeButton}>
            <Description fontSize="large" />
          </PrimaryButton>
        </Box>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={7}>
          <FormControl variant="outlined" className="form-control">
            <InputLabel htmlFor="size">Size</InputLabel>
            <Select
              value={size}
              onChange={handleSizeChange}
              label="Size"
              placeholder="Choose a size"
              inputProps={{
                name: 'size',
                id: 'size',
              }}
            >
              {product.sizes.map((size, idx) => (
                <MenuItem value={size} key={idx}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          1/Brick
        </Grid>
        <Grid item md={3} className={classes.price}>
          ${product.minPrice} - ${product.maxPrice}
        </Grid>
        <Grid item md={2}>
          <TextField
            id="quantity"
            label="Qty"
            variant="outlined"
            onChange={handleQuantityChange}
            className="form-control"
          />
        </Grid>
        <Grid item md={5}>
          <FormControl variant="outlined" className="form-control">
            <InputLabel htmlFor="unit">Unit</InputLabel>
            <Select
              native
              value={unit}
              onChange={handleUnitChange}
              label="Unit"
              placeholder="Choose Unit of Measure"
              inputProps={{
                name: 'unit',
                id: 'unit',
              }}
            ></Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          Total:
        </Grid>
        <Grid item md={3} className={classes.totalBricks}>
          {totalBricks} Bricks
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" className={classes.totalPriceWrapper}>
        <Grid item md={7}>
          <p className="text-secondary">
            Manufacturer Production Lead Time: <span className="text-primary">Thu Dec 10 2020</span>
          </p>
          <p className="text-secondary">
            Earliest Pick up or Delivery: <span className="text-primary">Dec 10 2020</span>
          </p>
        </Grid>
        <Grid item md={2}>
          Total Price:
        </Grid>
        <Grid item md={3} className={classes.totalPrice}>
          $ {totalPrice}
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item md={7}>
          Share on: <Facebook /> <Pinterest />
        </Grid>
        <Grid item md={5} className="text-right">
          <p>
            Shipping Calculated in Cart
          </p>
          <PrimaryButton className={classes.btnAddToCart}>
            Add to Cart
          </PrimaryButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetails
