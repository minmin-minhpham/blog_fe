import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer  from "./components/footer/Footer.jsx";

// layout
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <div className="wrapper">
        <Navbar />
        <App />
        <Footer />

      </div>
    </div>
  </React.StrictMode>
);
