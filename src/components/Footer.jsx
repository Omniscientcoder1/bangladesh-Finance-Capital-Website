import React from "react";
import styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Bangladesh Finance Capital. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
