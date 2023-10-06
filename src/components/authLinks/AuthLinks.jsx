import { Link } from "react-router-dom";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // temporary
  const status = "notAuthenticated";

  return (
    <>
      {status === "notAuthenticated" ? (
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link to="/write" className={styles.link}>
            Write
          </Link>
          {/* <span className={styles.link} onClick={signOut}> */}
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link to="/">Homepage</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About</Link>
          {status === "notAuthenticated"}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
