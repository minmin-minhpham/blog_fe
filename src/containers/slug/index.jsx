import Comments from "../../components/comments/Comments";
import Menu from "../../components/menu/Menu";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>
            Best known for the Hot 100 and Billboard 200, which list the most
            popular songs and albums each week in the industry.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img
                src="/p1.jpeg"
                alt=""
                className={`img-fill ${styles.avatar}`}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Min Min</span>
              <span className={styles.date}>04.10.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/p1.jpeg" alt="" className={`img-fill ${styles.image}`} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.pdescriptionost}>
            <p>
              Best known for the Hot 100 and Billboard 200, which list the most
              popular songs and albums each week in the industry. Offers
              industry news, events, podcasts, and music streaming.
            </p>
            <h2>Best known for the Hot 100 and Billboard 200.</h2>
            <p>
              Best known for the Hot 100 and Billboard 200, which list the most
              popular songs and albums each week in the industry. Offers
              industry news, events, podcasts, and music streaming.
            </p>
            <p>
              Best known for the Hot 100 and Billboard 200, which list the most
              popular songs and albums each week in the industry. Offers
              industry news, events, podcasts, and music streaming.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
