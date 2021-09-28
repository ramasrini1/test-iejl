import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Social from "../Social/Social";
import FooterL from "../../assets/iejl-logo.svg";

const Footer = () => {
  const pageData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const cleanData = {};

  pageData.allMarkdownRemark.nodes.forEach(page => {
    const category = page.frontmatter.category;
    const title = page.frontmatter.title;
    const path = page.fields.slug;
    if (category === "DUMMY_PAGE") {
      return;
    }
    if (!Object.prototype.hasOwnProperty.call(cleanData, category)) {
      cleanData[category] = [];
    }
    cleanData[category].push({ path: path, title: title });
  });

  return (
    <div>
      <div className="bg-format-primary sm:py-16">
        <div className="px-80">
          <div className="flex lg:flex-row flex-col xl:justify-start justify-between md:items-start w-full xl:space-x-24 lg:space-x-6 lg:space-y-0 space-y-10">
            <div className="w-full xl:max-w-lg lg:max-w-xs xl:mr-0 mr-0">
              <div className="mt-4">
                <FooterL className="w-32 pt-3" />
                <p className="text-base text-white-nav mt-4 tracking-normal leading-7">
                  The International Economic Justice League, Inc. (IEJL) is a
                  California nonprofit 501 (c)(3) corporation, founded in 2016,
                  with the mission to abate corruption. Our goal is to focus on
                  the leaders of tomorrow by forming a group of ethically-minded
                  individuals who want to join in the fight against corruption.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mt-10 pl-0 lg:pl-5">
                <h3 className="text-bold text-white-nav uppercase tracking-wider font-black">
                  Company
                </h3>
                <div className="mt-5 space-y-3">
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Terms and<br></br>Conditions
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-60">
              <div className="mt-10">
                <h3 className="text-bold whitespace-nowrap text-white-nav font-black tracking-wider font-bold uppercase">
                  Quick Links
                </h3>
                <div className="mt-5 space-y-2.5">
                  <Link 
                    to="/faq"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    FAQs
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Programs
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    News
                  </Link>
                  <Link 
                    to="/about"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Sponsor Login
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex text-medium text-white-nav text-justify hover:text-format-text font-light no-underline"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-96">
              <div className="mt-10">
                <h3 className="text-bold text-white-nav font-black tracking-wider font-bold uppercase">
                  Contact US
                </h3>
                <div className="mt-5">
                  <p className="text-medium text-white-nav leading-relaxed mb-3">
                    4667 MacArthur Blvd. Suite 400 <br />
                    Newport Beach
                    <br />
                    CA 92660 <br />
                  </p>
                  <a
                    href="tel:+1 949 887 0455"
                    className="flex items-center mt-0 no-underline"
                  >
                    <span className="text-medium text-white-nav text-justify hover:text-format-text">
                      &#43;1 949 887 0455
                    </span>
                  </a>
                  <div className="mt-4">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="bg-navy-dark py-8">
        <div className="main-container">
          <div className="flex items-center md:justify-between justify-center">
            <div className="flex flex-col md:items-start items-center">
              <p className="text-xs text-white md:text-left text-center">
                &copy; 2020-2021 All rights reserved.
              </p>
              <p className="text-xs text-white md:text-left text-center">
                By accessing and using this page you agree to the{" "}
                <Link to="/privacy-notice" className="text-gray-200 underline">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Footer;
