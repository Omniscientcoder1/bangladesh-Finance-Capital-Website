import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import styles from "../styles/components/contact.module.css";

const Contact = () => {
  return (
    <>
     
      <PageContent>
        <h1>Contact Us</h1>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </PageContent>
    
    </>
  );
};

export default Contact;