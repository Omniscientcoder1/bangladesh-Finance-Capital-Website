import React from "react";
import styles from "../styles/components/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1>Capital Market Expertise</h1>
        <p>Driving strategic investments with integrity and impact</p>
      </div>
    </div>
  );
};

export default Banner;
