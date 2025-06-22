import React from "react";
import styles from "@/styles/components/HeroBanner.module.css";
import data from "@/data/heroBannerData.js";

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </div>
    </section>
  );
};

export default HeroBanner;

