// ClientLogos.jsx
import React from "react";
import styles from "@/styles/components/ClientLogos.module.css"; // import styles
import data from "@/data/clientLogosData.js"; // import mock data

// Component to render a logo grid
const ClientLogos = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{data.title}</h2>
        <div className={styles.logos}>
          {data.logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
