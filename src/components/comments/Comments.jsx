import { Link } from "react-router-dom";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status !== "authenticated" ? (
        <Link href="/login">Login to write a comment</Link>
      ) : (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              src="/p1.jpeg"
              alt=""
              style={{
                width: 50,
                height: 50,
              }}
              className={`img-fill ${styles.image}`}
            />
            <div className={styles.user}>
              <span className={styles.username}>Min Min</span>
              <span className={styles.date}>04.10.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry. Offers industry
            news, events, podcasts, and music streaming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
