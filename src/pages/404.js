import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import NavButton from "../components/UI/NavButton/NavButton";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    <NotFoundNavButton />
  </Layout>
);

export default NotFoundPage;

function NotFoundNavButton() {
  return (
    <NavButton
      title="Back"
      link="/"
      className="header__btn"
      variant="primary"
    />
  );
}
