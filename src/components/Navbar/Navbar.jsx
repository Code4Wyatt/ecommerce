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

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Typography variant="h6" className={classes.title} color="inherit">
          <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
          Commerce.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
      </>
  );
};

export default Navbar;