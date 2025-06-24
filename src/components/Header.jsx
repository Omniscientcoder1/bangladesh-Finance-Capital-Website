
import React, { useState } from "react";
import Link from "next/link";
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
      { name: "OUR STORY", path: "/about/our-story" },
      // { name: "OUR TEAM", path: "/team" },
      { name: "MISSION AND VISION", path: "/about/mission" },
      { name: "BOARD OF DIRECTORS", path: "/about/directors" },
      { name: "LEADERSHIP", path: "/about/leadership" },
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
          { name: "BLUE-SIP", path: "/services/portfolio/blue-sip" },
        ],
      },
      {
        name: "INVESTMENT BANKING",
        path: "/services/banking",
        subItems: [
          { name: "CORPORATE ADVISORY", path: "/services/banking/corporate-advisory" },
          { name: "DEBT/EQUITY SOLUTIONS", path: "/services/banking/debt-equity" },
          { name: "PUBLIC/RIGHTS OFFERINGS", path: "/services/banking/public-rights" },
          { name: "TRUSTEESHIP SERVICES", path: "/services/banking/trusteeship" },
          { name: "MERGER & ACQUISITION SERVICES", path: "/services/banking/merger-acquisition" },
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
      // { name: "EMPLOYEE TESTIMONIALS", path: "/research/analysis" },
      // { name: "LIFE AT BFCL", path: "/research/analysis" },
    ],
  },
    {
    label: "CONTACT US",
    subItems: [
      // { name: "BRANCH LOCATIONS", path: "/research/reports" },
      { name: "CONTACT FORM", path: "/contact" },
      { name: "CUSTOMER SERVICE", path: "/research/analysis" },
    ],
  },
      {
    label: "QUICK LINKS",
    subItems: [
      { name: "BSEC", path: "https://sec.gov.bd/" },
      { name: "RJSC", path: "https://app.roc.gov.bd/" },
      { name: "Bangladesh Bank", path: "https://www.bb.org.bd/en/index.php" },
      { name: "NBR", path: "https://nbr.gov.bd/" },
      { name: "CDBL", path: "https://cdbl.com.bd/" },
      { name: "MINISTRY OF COMMERCE", path: "https://mincom.gov.bd/" },
      { name: "MINISTRY OF FINANCE", path: "https://mof.gov.bd/" },
      { name: "BANGLADESH FINANCE", path: "https://bd.finance/" },
      { name: "BANGLADESH FINANCE SECURITIES", path: "https://bfsl.bd.finance/" },

    ],
  },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleSubMenuHover = (event) => {
    if (typeof window === "undefined") return; // ✅ prevent SSR hydration error

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
        <Link href="/" passHref legacyBehavior>
          <a className={styles.logo}>
            <img src="/images/logo_cropped.png" alt="Logo" />
          </a>
        </Link>

        {!isMobile && (
          <nav className={styles.desktopNav}>
            <ul className={styles.menu}>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ul className={styles.dropdown}>
                      {item.subItems.map((sub) => (
                        <li key={sub.name} onMouseEnter={handleSubMenuHover}>
                          <Link href={sub.path} passHref legacyBehavior>
                            <a>{sub.name}</a>
                          </Link>
                          {sub.subItems && (
                            <ul className={styles.dropdownRight}>
                              {sub.subItems.map((deep) => (
                                <li key={deep.name}>
                                  <Link href={deep.path} passHref legacyBehavior>
                                    <a>{deep.name}</a>
                                  </Link>
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
                        <Link href={sub.path} passHref legacyBehavior>
                          <ListItem button component="a" onClick={toggleDrawer}>
                            <ListItemText inset primary={sub.name} />
                          </ListItem>
                        </Link>
                        {sub.subItems?.map((deep) => (
                          <Link href={deep.path} passHref legacyBehavior key={deep.name}>
                            <ListItem button component="a" onClick={toggleDrawer}>
                              <ListItemText inset primary={`— ${deep.name}`} />
                            </ListItem>
                          </Link>
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
