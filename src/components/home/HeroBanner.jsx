// src/components/home/HeroBanner.jsx
import React from "react";
import styles from "../../styles/components/HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to Bangladesh Finance Capital</h1>
        <p className={styles.subheading}>Your trusted partner in investment and portfolio management</p>
      </div>
    </section>
  );
};

export default HeroBanner;
