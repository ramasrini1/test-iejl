/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ location, children }) => (
  <>
    {process.env.GATSBY_COMING_SOON !== "true" && (
      <Header path={location && location.pathname ? location.pathname : "/"} />
    )}
    {children}
    {process.env.GATSBY_COMING_SOON !== "true" ? <Footer /> : null}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
