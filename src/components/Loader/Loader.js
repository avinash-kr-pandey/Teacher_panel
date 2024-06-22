import React from "react";
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <section className={styles.dots_container}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </section>
  );
};

export default Loader;