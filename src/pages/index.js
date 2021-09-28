import React from "react";
import SEO from "../components/SEO/SEO";
import LandingPage from "../components/LandingPage/LandingPage";
import "../styles/index.css";

const IndexPage = ({ data }) => {
  console.log("Route to index: ", data, process.env.GATSBY_COMING_SOON);
  return (
    <>
      <SEO title="International Economics Justice League" />
      <LandingPage />
    </>
  );
};

export default IndexPage;
