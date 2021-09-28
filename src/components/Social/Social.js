import React from "react";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";
import InstagramIcon from "../../assets/instagram.svg";
import LinkedinIcon from "../../assets/Linkedin.svg";
export default function Social() {
  return (
    <div className="flex w-full sm:space-x-4 space-x-9">
      <a
        className="transform sm:scale-100 scale-150"
        href="https://www.facebook.com/internationalEconomicJusticeLeague/"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon className="h-4 w-auto hover:fill-gold" />
      </a>

      <a
        className="transform sm:scale-100 scale-150"
        rel="noreferrer"
        href="https://twitter.com/iejl_org?lang=en"
        target="_blank"
      >
        <TwitterIcon className="h-4 w-auto" />
      </a>

      <a
        className="transform sm:scale-100 scale-150"
        rel="noreferrer"
        href="https://www.instagram.com/iejlorg/"
        target="_blank"
      >
        <InstagramIcon className="h-4 w-auto" />
      </a>

      <a
        className="transform sm:scale-100 scale-150"
        rel="noreferrer"
        href="https://www.linkedin.com/company/international-economic-justice-league-inc"
        target="_blank"
      >
        <LinkedinIcon className="h-4 w-auto" />
      </a>
    </div>
  );
}
