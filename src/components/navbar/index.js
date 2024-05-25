import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { blue } from "@mui/material/colors";
import imageVn from "../../media/image_vn.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className="h-20">
          <div className="flex items-center flex-grow">
            <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <AddHomeIcon/>
            </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Booking.com
            </Typography>
          </div>
          <div className="space-x-2 hidden sm:block">
            <Button variant="contained" color="inherit" component={Link} to="/partner-register">
              <p className="text-sky-700">Create Partner Account</p>
            </Button>
            <Button variant="contained" color="inherit" component={Link} to="/register">
            <p className="text-sky-700">Register</p>
            </Button>
            <Button variant="contained" color="inherit" component={Link} to="/login">
            <p className="text-sky-700">Login</p>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="hidden sm:block">
        <img src={imageVn} alt="imagevn" className="w-full h-152s " />
      </div>
    </div>
  );
};

export default Navbar;
