import React from "react";
import styles from "./AboutOverview.module.scss";

const AboutOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <p>
          Bangladesh Finance Capital offers a wide range of financial services. Our mission is to
          empower investors and build a sustainable future.
        </p>
      </div>
    </section>
  );
};

export default AboutOverview;
