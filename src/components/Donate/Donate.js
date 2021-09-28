import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import addToMailchimp from "gatsby-plugin-mailchimp";
//import AdddressIcon from "../../assets/ico-address.svg";
//import PhoneIcon from "../../assets/ico-phone.svg";
//import EmailIcon from "../../assets/ico-email.svg";
import Social from "../Social/Social";


function Donate() {
  const { DonateImage, } = useStaticQuery(graphql`
    query DonateImageQuery {
      DonateImage: file(relativePath: { eq: "donate/donate.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  let donationInfo = [];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");
  const [mailChimpRes, setMailChimpRes] = useState();
  const [donation, setDonation] = useState(0);
  const [freq, setFreq] = useState('one-time');


  const handleSubmit = e => {
    e.preventDefault();
    donationInfo.push({ 'name': name, 'email': email, 'donation': donation, 'freq': freq });
    console.log(donationInfo);
    console.log(donationInfo[0].name);
  };

  const howMuch = e => {
    e.preventDefault();
    setDonation(e.target.value);

  };


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
      <div id="two-way divider" className="flex flex-col lg:grid lg:grid-cols-2 xl:gap-5 xl:px-80 bg-format-background">
        <div id="left-side" className="flex flex-col py-10  xl:py-20 w-full ">
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col px-20">
              <div className="flex flex-row">
                <div id="vertical-line" className="bg-format-secondary w-1.5 h-full" />
                <p className="text-heading-2 font-heading px-4 w-full sm:w-3/5 xl:w-10/12 leading-tight ">Support our future leaders</p>
              </div>
              <p className="text-sm sm:text-regular mt-10 px-4 xl:px-10 leading-7">Your generous contributions help
                IEJL create and strengthen a global community with a culture of
                ethical business practices. An ethical culture improves quality of life for all,
                increases economic wealth, stabilizes governments, and creates a foundation
                of trust in society.
              </p>
            </div>

          </div>
          <Img
            style={{ position: "relative" }}
            className="hidden sm:block object-cover object-center h-3/4 w-3/4 xl:h-full lg:w-full"
            fluid={DonateImage.childImageSharp.fluid}
          />
        </div>
        <div id="right-side" className="lg:py-20 z-20">
          <div id="form-box" className="mx-3 mb-5 bg-format-background shadow-xl w-auto justify-start">
            <form className="flex flex-col px-5 space-y-10" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between">
                <label>
                  <input type="radio" value="one-time" id="one-time" name="donation type" className="mr-3" defaultChecked onChange={() => setFreq('one-time')} />
                  One-time donation
                </label>
                <label>
                  <input type="radio" value="monthly" id="monthly" name="donation type" className="mr-3" onChange={() => setFreq('monthly')} />
                  Monthly donation
                </label>
              </div>
              <div id="amount" className="flex flex-col xl:flex-row sm:space-x-3">
                <button id="10" name="amount" value="10" className="bg-format-primary m-1 py-3 px-4" onClick={howMuch} style={{ background: donation == 10 ? 'lightblue' : '' }}>$10</button>
                <button id="15" name="amount" value="15" className="bg-format-primary m-1 py-3 px-4" onClick={howMuch} style={{ background: donation == 15 ? 'lightblue' : '' }}>$15</button>
                <button id="30" name="amount" value="30" className="bg-format-primary m-1 py-3 px-4" onClick={howMuch} style={{ background: donation == 30 ? 'lightblue' : '' }}>$30</button>
                <button id="60" name="amount" value="60" className="bg-format-primary m-1 py-3 px-4" onClick={howMuch} style={{ background: donation == 60 ? 'lightblue' : '' }}>$60</button>
                <div className="flex items-end text-format-primary m-3"
                >$
                  <input type="number" placeholder="other" min="10.00" step="0.01" className="bg-transparent border-b px-2 w-full focus:outline-none"
                    onChange={howMuch}
                  />
                </div>
              </div>

              <p>Payment Information</p>
              <div className="flex flex-col space-y-2 xl:space-y-0 xl:flex-row justify-between">
                <label>
                  <input type="radio" value="Credit" name="method" className="mr-3" defaultChecked onChange={() => setMethod('credit')} />
                  Credit Card
                </label>
                <label>
                  <input type="radio" value="Check" name="method" className="mr-3" onChange={() => setMethod('eCheck')} />
                  eCheck
                </label>
                <label>
                  <input type="radio" value="Paypal" name="method" className="mr-3" onChange={() => setMethod('paypal')} />
                  Paypal
                </label>
                <label>
                  <input type="radio" value="Amazon Pay" name="method" className="mr-3" onChange={() => setMethod('amazonPay')} />
                  Amazon Pay
                </label>
              </div>
              <div  className="grid grid-cols-3 gap-5">
                <input type="tel" placeholder="Credit card" maxLength="16" className="col-span-2 w-full bg-transparent border-b border-gray-400 px-2 w-full focus:outline-none" />
                <input type="tel" placeholder="CVV" maxLength="4" className="bg-transparent border-b border-gray-400 px-2 w-full focus:outline-none" />
              </div>
                <div className="grid grid-cols-3 gap-5">
                <input type="tel" placeholder="MM/YY" maxLength="5" className="bg-transparent border-b border-gray-400 px-2 w-full focus:outline-none" />
                <input type="text" placeholder="Name" className="col-span-2 bg-transparent border-b border-gray-400 px-2 w-full focus:outline-none" />
                </div>

     

              <p>Personal Information</p>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="street" placeholder="Street Address" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" onChange={(e) => setName(e.target.value)} />
                <input type="city" placeholder="City, State" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="text" placeholder="Country" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="tel" placeholder="Zip Code" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div className="flex flex-col lg:grid  lg:grid-cols-2 gap-12">
                <input type="email" placeholder="E-mail" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="tel" placeholder="Phone Number" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-format-primary text-white w-1/2 m-4 h-14 hover:bg-format-secondary"
                >Donate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}

export default Donate;
