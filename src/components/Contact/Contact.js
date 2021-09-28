import React, { useState } from "react";
import { Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [pledgeId, setPledgeId] = useState("");
  const [emailToSubscribe, setEmailToSubscribe] = useState("");
  const [mailChimpRes, setMailChimpRes] = useState();

  function onChange(value) {
    console.log('Captcha value:', value);
  }

  const handleContactSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, {
      NAME: firstName + " " + lastName,
      PHONE: phone,
      REASON: reason,
      MESSAGE: message,
      PLEDGE_ID: pledgeId,
    })
      .then(data => {
        setMailChimpRes(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubscribe = e => {
    e.preventDefault();
    addToMailchimp(emailToSubscribe)
      .then(data => {
        setMailChimpRes(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section className="flex flex-col xl:flex-row pt-4 pb-20 pl-4 pr-4 gap-20 bg-format-background">
      <div className="w-full xl:w-1/2 mt-10 xl:ml-24">
        <div className="pl-12">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl">
              Contact us
            </h3>
          </div>
          <div className="ml-10 mt-3">
            <text className="text-md sm:text-lg lg:text-xl">
              Please use the form to reach out with any questions or inquiries 
              you may have. Looking for a quick answer?
              Visit our <Link to='/faq' className="w-min whitespace-nowrap text-format-secondary font-semibold hover:text-format-primary hover:border-format-primary no-underline tracking-wide">FAQ page</Link>.
            </text>
          </div>
        </div>
        <div className="flex mt-4 py-10 px-16 bg-format-background shadow-lg">
          <form onSubmit={handleContactSubmit} className="flex flex-wrap justify-between">
            <label className="flex flex-col w-full md:w-5/12 xl:w-full 2xl:w-5/12 mb-4">
              <span>
                First Name
              </span>
              <input
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <label className="flex flex-col w-full md:w-5/12 xl:w-full 2xl:w-5/12 mb-4">
              <span>
                Last Name
              </span>
              <input
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <label className="flex flex-col w-full md:w-5/12 xl:w-full 2xl:w-5/12 mb-4">
              <span>
                Phone Number
              </span>
              <input
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <label className="flex flex-col w-full md:w-5/12 xl:w-full 2xl:w-5/12 mb-4">
              <span>
                Email
              </span>
              <input
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <label className="flex flex-col w-full mb-4">
              <span>
                Select Your Reason For Contact
              </span>
              <select
                required
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg text-gray-400 visited:text-black"
              >
                <option value="1">Lorem ipsum</option>
                <option value="2">Dolor sit amet</option>
              </select>
            </label>
            <label className="flex flex-col w-full mb-4">
              <span>
                Message
              </span>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <label className="flex flex-col w-full md:w-5/12 xl:w-full 2xl:w-5/12 mb-12">
              <span>
                Pledge ID <span className="text-format-primary">(optional)</span>
              </span>
              <input
                value={pledgeId}
                onChange={e => setPledgeId(e.target.value)}
                className="focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-format-secondary hover:border-format-secondary bg-format-background py-2 w-full text-base sm:text-md md:text-lg"
              />
            </label>
            <div className="flex w-full md:w-1/2 xl:w-full 2xl:w-1/2 mb-12">
              <ReCAPTCHA
                sitekey="6Lca0zccAAAAAG9HHSR3GAjVnSynPqepQyVOwwpp"
                onChange={onChange}
              />
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="px-40 py-3 bg-format-primary hover:bg-format-secondary transition-colors duration-150 text-white font-semibold text-base sm:text-md md:text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full xl:w-1/2 xl:mt-10 xl:mr-24">
        <div className="flex-grow relative text-right w-full">
          <div className="overflow-hidden bg-none h-120 xl:h-full w-full">
            <iframe className="w-full h-full m-0 overscroll-none" id="gmap_canvas" src="https://maps.google.com/maps?q=4667%20MacArthur%20Blvd%20Suite%20400,%20Newport%20Beach,%20CA%2092660&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="my-10 font-heading text-4xl lg:text-5xl">
            Never miss an update
          </h4>
          <text className="text-md sm:text-lg lg:text-xl">
            Enter your email to receive the IEJL newsletter.
          </text>
          <div className="my-3 w-full 2xl:w-2/3">
            <form onSubmit={handleSubscribe} className="flex">
              <input
                required
                value={emailToSubscribe}
                onChange={e => setEmailToSubscribe(e.target.value)}
                placeholder="Enter your email..."
                className="focus:outline-none focus:ring-0 border-t-2 border-b-2 border-l-2 focus:border-format-secondary px-2 py-3 w-full text-base sm:text-md md:text-lg"
              />
              <button
                type="submit"
                className="px-4 bg-format-secondary hover:bg-format-primary transition-colors duration-150 text-white font-semibold text-base sm:text-md md:text-lg uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
          <text className="text-md sm:text-lg lg:text-xl text-gray-400">
            Your email is safe with us, we don&apos;t spam.
          </text>
        </div>
      </div>
    </section>
  );
}
