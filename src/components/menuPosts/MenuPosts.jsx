import React from "react";
import styles from "./menuPosts.module.css";
import { Link } from "react-router-dom";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <img src="/p1.jpeg" alt="" className={`img-fill ${styles.image}`} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Min Min</span>
            <span className={styles.date}> - 04.10.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <img src="/p1.jpeg" alt="" className={`img-fill ${styles.image}`} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Min Min</span>
            <span className={styles.date}> - 04.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <img src="/p1.jpeg" alt="" className={`img-fill ${styles.image}`} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Min Min</span>
            <span className={styles.date}> - 04.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <img src="/p1.jpeg" alt="" className={`img-fill ${styles.image}`} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Min Min</span>
            <span className={styles.date}> - 04.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
