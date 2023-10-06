// import React from "react";
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import styles from "./blogPage.module.css";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className={styles.constainer}>
      <Outlet />
      <h1 className={styles.title}>Stypke blogs</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};
export default Blog;
