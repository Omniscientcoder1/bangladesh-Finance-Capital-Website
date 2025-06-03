import React from "react";
import styles from "@/styles/components/NewsPreview.module.css";
import data from "@/data/newsPreviewData.js";

const NewsPreview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{data.title}</h2>
        <div className={styles.articles}>
          {data.articles.map((article, index) => (
            <div key={index} className={styles.card}>
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
