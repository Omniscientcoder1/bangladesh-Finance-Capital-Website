import React from "react";
import styles from "@/styles/components/CTASection.module.css";
import data from "@/data/cTASectionData.js";

const CTASection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{data.title}</h2>
        <p className={styles.text}>{data.description}</p>
        <a href={data.buttonLink} className={styles.button}>{data.buttonText}</a>
      </div>
    </section>
  );
};

export default CTASection;
