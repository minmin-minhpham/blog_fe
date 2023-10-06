import { Image } from "antd";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <img src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { right: 1, background: "white" }
            : { left: 1, background: "#0f172a" }
        }
      ></div>
      <img src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
