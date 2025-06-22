// src/components/home/AboutOverview.jsx
import React from "react";
import styles from "@/styles/components/AboutOverview.module.css";

const AboutOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <h2 className={styles.heading}>About Us</h2> */}
        <p className={styles.text}>
          Bangladesh Finance Capital is a dynamic and forward-thinking merchant bank committed to empowering businesses and investors through innovative financial solutions. As a subsidiary of Bangladesh Finance PLC, we specialize in portfolio management, issue management, and corporate advisory services—designed to fuel sustainable growth in today’s fast-paced capital market. Trusted, transparent, and client-focused, we are shaping the future of investment in Bangladesh.
        </p>
      </div>
    </section>
  );
};

export default AboutOverview;
