import React from "react";
import styles from "../styles/components/teamcard.module.css";

const TeamCard = ({ name, title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default TeamCard;