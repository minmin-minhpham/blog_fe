import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { Image } from "antd";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src="/facebook.png" alt="facebook" width={24} height={24} />
        <img src="/instagram.png" alt="instagram" width={24} height={24} />
        <img src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <img src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <img
          src="/logo.jfif"
          alt="Min's BLogs"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link to="/" className={styles.link}>
          Homepage
        </Link>
        <Link to="/" className={styles.link}>
          Contact
        </Link>
        <Link to="/" className={styles.link}>
          About
        </Link>
        {/* <Link to="/">Login</Link> */}
        <AuthLinks />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
