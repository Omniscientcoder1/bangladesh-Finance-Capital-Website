import React from "react";
import styles from "../styles/components/newscard.module.css";

const NewsCard = ({ title, summary, date }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      <span className={styles.date}>{date}</span>
    </div>
  );
};

export default NewsCard;