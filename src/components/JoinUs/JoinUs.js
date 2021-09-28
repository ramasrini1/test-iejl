import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import addToMailchimp from "gatsby-plugin-mailchimp";
//import AdddressIcon from "../../assets/ico-address.svg";
//import PhoneIcon from "../../assets/ico-phone.svg";
//import EmailIcon from "../../assets/ico-email.svg";
import Social from "../Social/Social";


function JoinUs() {
  const { JoinUsImage, } = useStaticQuery(graphql`
    query JoinUsageQuery {
      JoinUsImage: file(relativePath: { eq: "joinus/sign-up.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  function onChange(value) {
    console.log('Captcha value:', value);
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mailChimpRes, setMailChimpRes] = useState();

  const _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, {
      NAME: name,
      MESSAGE: message,
    })
      .then(data => {
        setMailChimpRes(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
    <Img
            style={{ position: "absolute" }}
            className="hidden sm:block relative object-cover object-center h-5/12 w-4/12 mt-96 mx-14 z-10"
            fluid={JoinUsImage.childImageSharp.fluid}
          />
      <div id="two-way divider" className="flex flex-col lg:grid lg:grid-cols-3 xl:gap-10 xl:px-80 bg-format-background">
        <div id="left-side" className="flex flex-col py-10 xl:py-20">
          <div id="contact-text" className="flex flex-row space-x-8">
            <div className="flex flex-col px-20 sm:px-8 xl:pl-4">
              <div className="flex flex-row">
                <div id="vertical-line" className="bg-format-secondary w-1.5 h-full" />
                <p className="text-heading-2 font-heading px-4 xl:px-10 leading-tight">Become a Pledge</p>
              </div>
              <p className="text-medium mt-10 px-4 xl:px-10">Fill out the form to take the Oath of Ethical Commerce and get full
                access to IEJL programs. Still have questions? Visit our&nbsp;
                <span><a href="/FAQ" className="text-format-secondary no-underline">FAQ Page</a></span> or&nbsp;
                <span><a href="/contact" className="text-format-secondary no-underline">reach out</a></span>
                &nbsp;to our team.
              </p>
            </div>
            
          </div>
          
        </div>
        <div id="right-side" className="lg:py-20 col-span-2 z-20">
          <div id="form-box" className="mx-5 bg-format-background shadow-xl w-auto justify-start">
            <form className="flex flex-col px-5 space-y-10">

              <p>Login Information</p>
              <div id="name" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="text" placeholder="Username" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="e-mail" placeholder="E-mail" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="contact" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="phone" placeholder="Phone number" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="password" placeholder="Passwords" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>

              <p>Contact Information</p>
              <div id="name" className="flex flex-col lg:grid  lg:grid-cols-2 gap-12">
                <input type="text" placeholder="Name" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="Last Name" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="contact" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <select id="reason" name="options" className="bg-transparent px-2 focus:outline-none">
                  <option value="" disabled selected>Country</option>
                  <option value="1">Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
                <input type="text" placeholder="Address" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="name" className="flex flex-col lg:grid  lg:grid-cols-3 gap-12">
                <input type="text" placeholder="State" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="City" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="Postal Code" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div className="flex flex-row space-x-10 justify-start items-start m-10">
                <input type="checkbox" className="w-5 h-5 flex-none" required />
                <p>I agree to IEJL&apos;s&nbsp;
                  <span><a href="/privacy-policy" className="text-format-primary no-underline">Privacy Policy</a></span>
                  ,&nbsp;
                  <span><a href="/terms-of-use" className="text-format-primary no-underline">Terms of Use</a></span>
                  &nbsp;and&nbsp;
                  <span><a href="/cookie-policy" className="text-format-primary no-underline">use of cookies</a></span>.
                </p>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-format-primary text-white w-1/2 m-4 h-14 hover:bg-format-secondary">Sign Up <span className="font-black">&#8594;</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}

export default JoinUs;
