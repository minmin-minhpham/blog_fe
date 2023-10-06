import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="p1.jpeg"
          className={`img-fill ${styles.image}`}
          alt="Alternative text"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>04.10.2023 - </span>
          <span className={styles.category}>https://www.billboard.com/</span>
        </div>
        <Link href={`/posts/`}>
          <h1>Billboard.</h1>
        </Link>
        <p>
          Best known for the Hot 100 and Billboard 200, which list the most
          popular songs and albums each week in the industry. Offers industry
          news, events, podcasts, and music streaming.
        </p>
        <Link href={`/posts/`} className={styles.link}>
          Read mode
        </Link>
      </div>
    </div>
  );
};

export default Card;
