import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Link } from "react-router-dom";
import ListHotelCard from "../card/ListHotelCard";

import ListProvinceCard from "../card/ListProvinceCard";

const items = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 8 },
  { key: 9 },
];
const provinces = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 8 },
  { key: 9 },
];

const Navbar = () => {

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className="h-20 flex justify-between">
          <div className="flex items-center">
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <AddHomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Booking.com
            </Typography>
          </div>
          <div>
            <Typography variant="h4">
              Welcome To Booking App
            </Typography>
          </div>
          <div className="space-x-2 hidden sm:block">
            <Button
              variant="contained"
              color="inherit"
              component={Link}
              to="/partner-register"
            >
              <p className="text-sky-700">Create Partner Account</p>
            </Button>
            <Button
              variant="contained"
              color="inherit"
              component={Link}
              to="/register"
            >
              <p className="text-sky-700">Register</p>
            </Button>
            <Button
              variant="contained"
              color="inherit"
              component={Link}
              to="/login"
            >
              <p className="text-sky-700">Login</p>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="p-5 flex items-center justify-center">
        <div className="hidden sm:block">
          <ListHotelCard items={items} itemsPerPage={4} />
        </div>
      </div>
      <Stack padding={5}/>
      <div className="p-5 flex items-center justify-center" >
        <ListProvinceCard items={provinces} itemsPerPage={4}/>
      </div>
      <Stack padding={5}/>
    </div>
  );
};

export default Navbar;
