import React from "react";
import Link from "next/link";
import styles from "@/styles/components/servicepage.module.css";
import data from "@/data/serviceHighlightsData";

const ServiceHighlights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{data.title}</h2>
        <div className={styles.services}>
          {data.services.map((service, index) => (
            <Link href={service.link} key={index} passHref legacyBehavior>
              <a className={styles.card}>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
