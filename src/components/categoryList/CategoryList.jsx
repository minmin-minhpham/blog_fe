import { Link } from "react-router-dom";
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <Link
            to="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            <img
              src="/style.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Style
          </Link>

          <Link
            to="/blog?cat=style"
            className={`${styles.category} ${styles.fashion}`}
          >
            <img
              src="/fashion.png"
              width={32}
              height={32}
              className={styles.image}
            />
            fashion
          </Link>

          <Link
            to="/blog?cat=style"
            className={`${styles.category} ${styles.travel}`}
          >
            <img
              src="/travel.png"
              width={32}
              height={32}
              className={styles.image}
            />
            travel
          </Link>

          <Link
            to="/blog?cat=style"
            className={`${styles.category} ${styles.food}`}
          >
            <img
              src="/food.png"
              width={32}
              height={32}
              className={styles.image}
            />
            food
          </Link>

          <Link
            to="/blog?cat=style"
            className={`${styles.category} ${styles.coding}`}
          >
            <img
              src="/coding.png"
              width={32}
              height={32}
              className={styles.image}
            />
            coding
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
