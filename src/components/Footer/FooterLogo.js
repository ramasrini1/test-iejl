import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function FooterLogo() {
  const { logoImg } = useStaticQuery(graphql`
    query FooterQuery {
      logoImg: file(relativePath: { eq: "IEJL-logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link to="/" className="logo-wrapper flex items-center mt-4 mb-4">
      <img
        src={logoImg.childImageSharp.fixed.src}
        style={{ width: "100px" }}
        alt="IEJL-Logo"
      />
    </Link>
  );
}
