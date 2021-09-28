import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./legal-page.css";

const LegalPage = prop => {
  const rawData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
            html
          }
        }
      }
    }
  `);

  const findPage = query => {
    const pageData = {};
    query.allMarkdownRemark.edges.forEach(page => {
      if (prop.path === page.node.fields.slug) {
        pageData["title"] = page.node.frontmatter.title;
        pageData["date"] = page.node.frontmatter.date;
        pageData["body"] = page.node.html;
      }
    });
    return pageData;
  };
  const page = findPage(rawData);

  if (Object.keys(page) === 0) {
    return <div>Page Not Found, Sorry!</div>;
  }

  return (
    <>
      <div className="legal__body">
        <div className="legal__header">{page.title}</div>
        <div className="legal__date">
          {page.date ? page.date.split("T")[0] : ""}
        </div>
        <div
          className="legal__info"
          dangerouslySetInnerHTML={{ __html: page.body }}
        ></div>
      </div>
    </>
  );
};

export default LegalPage;
