import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../Pledge/BecomePledge.css";

export default function BecomePledge() {
  const { pledgeHero, pledgeMid, pledgeEnd } = useStaticQuery(graphql`
    query BecomePledgePageQuery {
      pledgeHero: file(relativePath: { eq: "pledgediscount/pledge-discount-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pledgeMid: file(relativePath: { eq: "pledge/pledge-mid.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pledgeEnd: file(relativePath: { eq: "pledge/pledge-end.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const steps = [
    {
      title: 'IEJL Content Library',
      description: 'Engage with or submit film, music, current events, research, and other media that highlight corruption and how to take action. You can also take a formal course leading to a certificate.'
    },
    {
      title: 'Local Chapter Meetings',
      description: 'Meet twice a month to make friends, network, discuss local issues, and get support from your community. Showing up matters.'
    },
    {
      title: 'IEJL Live!',
      description: 'Connect with local Pledges and the global community, share stories, and play games on a secure, ad-free internet-based social network. We don\'t sell your data.'
    },
    {
      title: 'Volunteer',
      description: 'Gain experience with your passion and skills. As an IEJL volunteer, you help us grow and reach more people like you. You\'re our brains and brawn.'
    }
  ];

  const perks = [
    {
      title: 'Get discounts from ethical retailers',
      description: 'The higher your Award Level, the better your discounts.'
    },
    {
      title: 'Increase visibility to employers',
      description: 'Employers use your Award Level in their hiring decision.'
    }
  ];

  return (
    <section>
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={pledgeHero.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 ml-6 lg:ml-44 mr-6 z-10">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="px-2 font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              Make friends.
            </h3>
            <h3 className="px-2 font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              Earn rewards.
            </h3>
            <h3 className="p-2 bg-format-secondary font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              Change the world.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-40 mb-12">
        <div className="w-screen max-w-6xl">
          <Img
            style={{ position: "" }}
            className="object-contain object-center h-full"
            fluid={pledgeMid.childImageSharp.fluid}
          />
        </div>
        <div className="pt-12 md:pt-0 px-8 lg:px-20 max-w-2xl">
          <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl">
            What it means to be a Pledge
          </h3>
          <text>
            When you become a Pledge, you take an oath to support
            ethical business practices. As part of the community,
            you will learn to identify corruption and its impact on
            society, earn rewards, make new friends, and increase your
            visibility to employers.
          </text>
        </div>
      </div>
      <div className="p-8 lg:p-20 bg-format-primary">
        <div className="max-w-4xl mb-12">
          <h3 className="py-6 font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
            Engage more, earn more
          </h3>
          <text className="text-white">
            IEJL offers several levels of exposure and
            marketing opportunities for you and your
            company based on your donation amount. As a
            sponsor, you help us cultivate change, and
            your organization will be recognized for supporting
            ethical business practices.
          </text>
        </div>
        <div className="flex flex-wrap gap-12 justify-center mb-12 lg:mb-0">
          {steps.map(({ title, description }, idx) =>
            <div key={idx} className="w-max md:w-80 p-12 bg-white">
              <text className="text-lg text-format-secondary">
                0{idx+1}
              </text>
              <h4 className="my-6 font-heading text-4xl lg:text-5xl">
                {title}
              </h4>
              <text>
                {description}
              </text>
            </div>
          )}
        </div>
      </div>
      <div className="p-8 lg:p-20">
        <div className="max-w-3xl mb-12">
          <h3 className="py-6 font-heading text-5xl sm:text-6xl lg:text-7xl">
            Level up as you grow
          </h3>
          <text>
            As you participate in IEJL programs, your ethical awareness
            increases and you earn points. The amount of points determines your Award Level.
            There are four levels: Bronze, Silver, Gold, and Platinum.
          </text>
        </div>
        <div className="flex flex-col-reverse xl:flex-row gap-20">
          <div className="md:w-screen max-w-3xl">
            <Img
              style={{ position: "" }}
              className="object-contain object-center h-full"
              fluid={pledgeEnd.childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-20">
            {perks.map(({ title, description }, idx) =>
              <div key={idx} className="sm:w-80">
                <h4 className="my-6 font-heading text-4xl lg:text-5xl">
                  {title}
                </h4>
                <text>
                  {description}
                </text>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
