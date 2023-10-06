import { Image } from "antd";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src="/p1.jpeg" className="img-fill" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Billboard</h1>
          <p className={styles.postDesc}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry. Offers industry
            news, events, podcasts, and music streaming.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
