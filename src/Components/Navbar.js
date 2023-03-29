/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HourglassBottomSharpIcon from "@mui/icons-material/HourglassBottomSharp";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./navbar.css";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      link: "#home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      link: "#about",
      icon: <InfoIcon />,
    },
    {
      text: "Tiffin",
      link: "#testimonial",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Order Now",
      link: "#waitlist",
      icon: <HourglassBottomSharpIcon />,
    },
    {
      text: "Basket",
      link: "#waitlist",
      icon: <HourglassBottomSharpIcon />,
    },
    {
      text: "Sign-up/in",
      link: "#waitlist",
      icon: <HourglassBottomSharpIcon />,
    },
    {
      text: "Contact us",
      link: "#waitlist",
      icon: <HourglassBottomSharpIcon />,
    },
    {
      text: "Cart",
      link: "#cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <div>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} style={{ padding: "12px 0px 0px 12px" }} alt="" />
        </div>
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#testimonial">Tiffin</a>
          <a href="#waitlist">Order Now</a>
          <a href="#waitlist">Basket</a>
          <a href="#waitlist">Sign-up/in</a>
          <a href="#waitlist">Contact Us</a>
          <a href="#cart">
            <BsCart2 className="navbar-cart-icon" />
          </a>
          {/* <button className="primary-button">Bookings Now</button> */}
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <a href={item.link}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
