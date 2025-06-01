import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import services from "../data/services";
import styles from "../styles/components/servicepage.module.css";

const Services = () => {
  return (
    <>
     
      <PageContent>
        <h1>Our Services</h1>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </PageContent>
   
    </>
  );
};

export default Services;
