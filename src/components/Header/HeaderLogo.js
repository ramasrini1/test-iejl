import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function HeaderLogo() {
  const { logoImg } = useStaticQuery(graphql`
    query HeaderQuery {
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
    <Link to="/" className="logo-wrapper">
      <img
        src={logoImg.childImageSharp.fixed.src}
        style={{ width: "120px" }}
        alt="IEJL-Logo"
      />
    </Link>
  );
}
