import Featured from "../../components/featured/Featured";
import CategoryList from "../../components/categoryList/CategoryList";
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// import styles from ".";
import styles from "./App.module.css";
import { ThemeContextProvider } from "../../context/ThemeContext";
import ThemeProvider from "../../providers/ThemeProvider";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default Layout;
