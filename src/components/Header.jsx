// ✅ src/components/Header.jsx
import React, { useState } from "react";
import styles from "../styles/components/header.module.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const menuItems = [
  {
    label: "ABOUT US",
    links: [
      { name: "Company Overview", path: "/about" },
      { name: "Leadership", path: "/team" },
    ],
  },
  {
    label: "SERVICES",
    links: [
      { name: "Portfolio Management", path: "/services" },
      { name: "Issue Management", path: "/services" },
    ],
  },
  {
    label: "RESEARCH",
    links: [
      { name: "Reports", path: "/research/reports" },
      { name: "Analysis", path: "/research/analysis" },
    ],
  },
  {
    label: "NEWS",
    links: [
      { name: "Press Releases", path: "/news" },
      { name: "Insights", path: "/news/insights" },
    ],
  },
  {
    label: "CAREER",
    links: [
      { name: "Jobs", path: "/career" },
      { name: "Internships", path: "/career/internships" },
    ],
  },
  {
    label: "CONTACT",
    links: [
      { name: "Support", path: "/contact" },
      { name: "Location", path: "/contact/location" },
    ],
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (event, label) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.logo} component="a" href="/">
          <img src="/images/logo.png" alt="Logo" height="40" style={{ marginRight: 8 }} />
          <Typography variant="h6">Bangladesh Finance Capital</Typography>
        </Box>

        <Box className={styles.desktopMenu}>
          {menuItems.map((menu) => (
            <Box key={menu.label}>
              <Button
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => handleMenuOpen(e, menu.label)}
              >
                {menu.label}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={openMenu === menu.label}
                onClose={handleMenuClose}
              >
                {menu.links.map((link, index) => (
                  <MenuItem key={index} component="a" href={link.path} onClick={handleMenuClose}>
                    {link.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>

        <IconButton
          className={styles.mobileMenuIcon}
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }}>
            {menuItems.map((menu) => (
              <Box key={menu.label}>
                <ListItem>
                  <strong>{menu.label}</strong>
                </ListItem>
                {menu.links.map((link, index) => (
                  <ListItem
                    button
                    component="a"
                    href={link.path}
                    key={index}
                    onClick={toggleDrawer}
                  >
                    <ListItemText inset primary={link.name} />
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;