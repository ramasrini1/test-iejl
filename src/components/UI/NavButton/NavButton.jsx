/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import "./NavButton.css";

const Button = ({ title, link, landing }) => {
  const [email, setEmail] = useState("");
  const [mailChimpRes, setMailChimpRes] = useState();

  const _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email)
      .then(data => {
        setMailChimpRes(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="mt-8 lg:mt-0">
      <form
        className="sm:flex py-2 gap-2 whitespace-nowrap"
        onSubmit={_handleSubmit}
      >
        <label htmlFor="emailAddress" className="sr-only">
          Email address
        </label>
        {landing ? (
          <>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="button button-primary">
              Notify Me
            </button>
          </>
        ) : (
          <></>
        )}
      </form>
      {mailChimpRes && mailChimpRes.result === "error" && (
        <p
          className="form-error"
          dangerouslySetInnerHTML={{ __html: mailChimpRes.msg }}
        ></p>
      )}
      {mailChimpRes && mailChimpRes.result === "success" && (
        <p
          className="form-success text-green"
          dangerouslySetInnerHTML={{ __html: mailChimpRes.msg }}
        ></p>
      )}
      <p className="form-bottom-text text-gray-500">
        We care about the protection of your data. Read our{" "}
        <Link
          style={{ color: "#1a1a1a" }}
          className="text-gray-900"
          to={`${link}`}
        >
          {title}
        </Link>
      </p>
    </div>
  );
};

export default Button;
