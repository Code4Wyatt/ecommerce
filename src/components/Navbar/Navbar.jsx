import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/shoplogo.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();



  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
          <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
          Wyatts Warehouse
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton component={Link} to="/Cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
      </>
  );
};

export default Navbar;
