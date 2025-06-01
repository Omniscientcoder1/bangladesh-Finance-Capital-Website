import React from "react";
import styles from "../styles/components/pagecontent.module.css";

const PageContent = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContent;
