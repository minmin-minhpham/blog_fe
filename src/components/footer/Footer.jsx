import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img
            src="/logo.jfif"
            alt="min's blogs"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <h1 className={styles.logoText}>Min's Blogs</h1>
        </div>
        <p className={styles.desc}>
          Best known for the Hot 100 and Billboard 200, which list the most
          popular songs and albums each week in the industry. Offers industry
          news, events, podcasts, and music streaming.
        </p>
        <div className={styles.icons}>
          <img src="/facebook.png" alt="" width={18} height={18} />
          <img src="/instagram.png" alt="" width={18} height={18} />
          <img src="/tiktok.png" alt="" width={18} height={18} />
          <img src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
