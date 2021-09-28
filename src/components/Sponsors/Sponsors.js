import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FiCheck } from "react-icons/fi";
import { Link } from "gatsby";

export default function Sponsors() {
  const { sponsorsHeaderImage } = useStaticQuery(graphql`
    query SponsorsPageQuery {
      sponsorsHeaderImage: file(relativePath: { eq: "sponsor/hero-sponsor.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const tiers = [
    {
      title: 'Bronze',
      description: 'The Bronze Sponsorship Package is rewarded to patrons of $1,001 to $5,000.',
      perks: [
        'Sponsorship Plaque',
        'Sponsorship Webpage Logo'
      ],
      link: '/sponsors' // TODO: change to specific sponsorship page
    },
    {
      title: 'Silver',
      description: 'The Silver Sponsorship Package is rewarded to patrons of $5,001 to $15,000.',
      perks: [
        'Sponsorship Plaque',
        'Sponsorship Webpage Logo',
        'Newsletter Recognition'
      ],
      link: '/sponsors' // TODO: change to specific sponsorship page
    },
    {
      title: 'Gold',
      description: 'The Gold Sponsorship Package is rewarded to patrons of $15,000 to $25,000.',
      perks: [
        'Sponsorship Plaque',
        'Sponsorship Webpage Logo',
        'Newsletter Recognition',
        'Company Logo on IEJL Email Blasts'
      ],
      link: '/sponsors' // TODO: change to specific sponsorship page
    },
    {
      title: 'Platinum',
      description: 'The Platinum Sponsorship Package is rewarded to patrons of $25,001 or more.',
      perks: [
        'Sponsorship Plaque',
        'Sponsorship Webpage Logo',
        'Newsletter Recognition',
        'Company Logo on IEJL Email Blasts',
        'Recognized Platinum Sponsor at All IEJL Events',
        'Marketing Collateral Logo Placement'
      ],
      link: '/sponsors' // TODO: change to specific sponsorship page
    }
  ];

  return (
    <section>
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={sponsorsHeaderImage.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 ml-6 lg:ml-44 mr-6 z-10 max-w-md">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              Support<br/>our mission
            </h3>
          </div>
          <div className="ml-10 mt-3">
            <text className="text-md sm:text-lg lg:text-xl text-white">
              IEJL offers several levels of exposure and
              marketing opportunities for you and your
              company based on your donation amount. As a
              sponsor, you help us cultivate change, and
              your organization will be recognized for supporting
              ethical business practices.
            </text>
          </div>
        </div>
      </div>
      
      
      <div className="flex flex-col py-20 px-6 lg:px-36 bg-format-background">
        <h3 className="mb-12 font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
          Choose a sponsorship<br/>level that works for you.
        </h3>
        <div className="flex flex-col self-start sm:self-end">
          <div className="flex flex-col sm:flex-row">
            {tiers.slice(0,2).map(
              ({ title, description, perks, link }, idx) => (
                <div key={idx} className={idx === 0 ? "border-r-0 sm:border-r-2 border-gray-300 pl-0 sm:pr-10" : "pl-0 sm:pl-10"}>
                  <div className="flex flex-col max-w-max sm:max-w-md h-96 border-b-2 border-gray-300">
                    <h4 className="mt-12 mb-3 font-heading text-4xl lg:text-5xl text-black-hakkei">
                      {title}
                    </h4>
                    <text className="text-format-secondary">
                      {description}
                    </text>
                    <div className="mt-4 flex-grow lg:text-md text-sm">
                      {perks.map(
                        perk => (
                          <div key={perk} className="flex items-center gap-2 py-1">
                            <FiCheck /> {perk}
                          </div>
                        )
                      )}
                    </div>
                    <Link 
                      to={link}
                      className="w-min mb-12 text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col sm:flex-row">
            {tiers.slice(2,4).map(
              ({ title, description, perks, link }, idx) => (
                <div key={idx} className={idx === 0 ? "border-r-0 sm:border-r-2 border-gray-300 pl-0 sm:pr-10" : "pl-0 sm:pl-10"}>
                  <div className={idx === 0 ? "flex flex-col max-w-max sm:max-w-md h-auto sm:h-120 border-b-2 sm:border-b-0 border-gray-300" : "flex flex-col max-w-max sm:max-w-md h-auto sm:h-120"}>
                    <h4 className="mt-12 mb-3 font-heading text-4xl lg:text-5xl text-black-hakkei">
                      {title}
                    </h4>
                    <text className="text-format-secondary">
                      {description}
                    </text>
                    <div className="mt-4 flex-grow text-sm lg:text-md">
                      {perks.map(
                        perk => (
                          <div key={perk} className="flex items-center gap-2 py-1">
                            <FiCheck /> {perk}
                          </div>
                        )
                      )}
                    </div>
                    <Link 
                      to={link}
                      className="w-min mb-12 mt-8 text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}