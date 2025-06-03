import React, { useState } from "react";
import styles from "../styles/components/header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const menuItems = [
  {
    label: "ABOUT US",
    subItems: [
      { name: "OUR STORY", path: "/about" },
      { name: "OUR TEAM", path: "/team" },
      { name: "MISSION AND VISION", path: "/mission" },
      { name: "BOARD OF DIRECTORS", path: "/directors" },
      { name: "LEADERSHIP", path: "/leadership" },
    ],
  },
  {
    label: "SERVICES",
    subItems: [
      {
        name: "PORTFOLIO MANAGEMENT",
        path: "/services/portfolio",
        subItems: [
          { name: "DISCRETIONARY", path: "/services/portfolio/discretionary" },
          { name: "NON-DISCRETIONARY", path: "/services/portfolio/non-discretionary" },
        ],
      },
      {
        name: "INVESTMENT BANKING",
        path: "/services/banking",
        subItems: [
          { name: "CORPORATE ADVISORY", path: "/services/banking/ipo" },
          { name: "DEBT/EQUITY SOLUTIONS", path: "/services/banking/ma" },
          { name: "PUBLIC/RIGHTS OFFERINGS", path: "/services/banking/ma" },
          { name: "TRUSTEESHIP SERVICES", path: "/services/banking/ma" },
          { name: "MERGER & ACQUISITION SERVICES", path: "/services/banking/ma" },
        ],
      },
      
    ],
  },
  {
    label: "RESEARCH",
    subItems: [
      { name: "WEEKLY UPDATE", path: "/research/reports" },
      { name: "MONTHLY UPDATE", path: "/research/analysis" },
      { name: "INDUSTRY UPDATE", path: "/research/analysis" },
    ],
  },
    {
    label: "NEWS",
    subItems: [
      { name: "NEWS & PR COVERAGE", path: "/research/reports" },
      { name: "INTERVIEWS", path: "/research/analysis" },
      { name: "MARKET INSIGHTS", path: "/research/analysis" },
      { name: "THOUGHT LEADERSHIP", path: "/research/analysis" },
      { name: "MEDIA", path: "/research/analysis" },
      { name: "OUR ACHIEVEMENTS", path: "/research/analysis" },
    ],
  },
  {
    label: "CAREER",
    subItems: [
      { name: "CURRENT OPENINGS", path: "/research/reports" },
      { name: "WHY WORK WITH US?", path: "/research/analysis" },
      { name: "EMPLOYEE TESTIMONIALS", path: "/research/analysis" },
      { name: "LIFE AT BFCL", path: "/research/analysis" },
    ],
  },
    {
    label: "CONTACT US",
    subItems: [
      { name: "BRANCH LOCATIONS", path: "/research/reports" },
      { name: "CONTACT FORM", path: "/research/analysis" },
      { name: "CUSTOMER SERVICE", path: "/research/analysis" },
    ],
  },
      {
    label: "QUICK LINKS",
    subItems: [
      { name: "BSEC", path: "/research/reports" },
      { name: "RJSC", path: "/research/analysis" },
      { name: "Bangladesh Bank", path: "/research/analysis" },
      { name: "NBR", path: "/research/analysis" },
      { name: "CDBL", path: "/research/analysis" },
      { name: "MINISTRY OF COMMERCE", path: "/research/analysis" },
      { name: "MINISTRY OF FINANCE", path: "/research/analysis" },
      { name: "BANGLADESH FINANCE", path: "/research/analysis" },
      { name: "BANGLADESH FINANCE SECURITIES", path: "/research/analysis" },

    ],
  },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleSubMenuHover = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const submenu = event.currentTarget.querySelector(`.${styles.dropdownRight}`);
    if (submenu) {
      if (viewportWidth - rect.right < 220) {
        submenu.classList.add(styles.openLeft);
      } else {
        submenu.classList.remove(styles.openLeft);
      }
    }
  };

  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo_cropped.png" alt="Logo" />
        </a>

        {!isMobile && (
          <nav className={styles.desktopNav}>
            <ul className={styles.menu}>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href="#">{item.label}</a>
                  {item.subItems && (
                    <ul className={styles.dropdown}>
                      {item.subItems.map((sub) => (
                        <li key={sub.name} onMouseEnter={handleSubMenuHover}>
                          <a href={sub.path}>{sub.name}</a>
                          {sub.subItems && (
                            <ul className={`${styles.dropdownRight}`}>
                              {sub.subItems.map((deep) => (
                                <li key={deep.name}>
                                  <a href={deep.path}>{deep.name}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
              <List sx={{ width: 250 }}>
                {menuItems.map((item) => (
                  <React.Fragment key={item.label}>
                    <ListItem><strong>{item.label}</strong></ListItem>
                    {item.subItems?.map((sub) => (
                      <React.Fragment key={sub.name}>
                        <ListItem button component="a" href={sub.path} onClick={toggleDrawer}>
                          <ListItemText inset primary={sub.name} />
                        </ListItem>
                        {sub.subItems?.map((deep) => (
                          <ListItem
                            button
                            component="a"
                            href={deep.path}
                            key={deep.name}
                            onClick={toggleDrawer}
                          >
                            <ListItemText inset primary={`— ${deep.name}`} />
                          </ListItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;