import React from "react";

import { useRoutes, Navigate, Link } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../containers/home";
import Blog from "../containers/blog";
import SinglePage from "../containers/slug";
import Login from "../containers/login";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Navigate to="/" replace /> },
        { path: "/blogs", element: <Blog />},
        { path: "/blogs/:slug", element: <SinglePage />},
        { path: "/login", element: <Login /> },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ]);

  return element;
};

function NoMatch() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <div>
        <h2>Nothing to see here!</h2>
        <p
          style={{
            textAlign: "center",
          }}
        >
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </div>
  );
}

export default Routes;
