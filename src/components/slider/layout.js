import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  fadeIn: true,
  autoplay: true,
  pauseOnHover: true,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
};

function CarouselPage() {
  const { image1, image2 } = useStaticQuery(graphql`
    query SliderPageQuery {
      image1: file(relativePath: { eq: "review/7.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "review/2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="bg-gray-100 lg:my-28 md:my-20 py-16">
        <div className="main-container">
          <div className="flex md:flex-row flex-col items-center md:space-x-3 mb-8">
            <h4 className="text-yellow-500 uppercase text-xl font-thin">
              Textimonials
            </h4>
            <div className="w-20 h-0.5 bg-gray-300 md:mt-0 mt-3"></div>
          </div>
          <h3 className="md:text-3xl text-2xl md:text-left text-center font-thin text-black-hakkei md:inline hidden">
            What they say
          </h3>

          <div className="mt-12">
            <Slider {...settings} className="mx-5">
              <div>
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-full flex items-center md:border-2 md:border-yellow-500 rounded-3xl md:pl-8 md:pr-56 md:py-8  pt-6 md:-mr-48">
                    <div className="space-y-3">
                      <p className="text-yellow-500 text-xl font-thin md:text-left text-center">
                        Jerry Z.
                      </p>
                      <p className="text-gray-600 sm:text-base text-sm pb-2 md:text-left text-center">
                        Volunteering with IEJL has put me in contact with
                        amazing and passionate people to work tirelessly to end
                        corruption. With IEJL, I collaborated and helped put
                        into place a framework to help end corruption.
                      </p>
                    </div>
                  </div>
                  <Img
                    className="md:h-72 md:w-52 sm:w-28 sm:h-28 w-24 h-24 object-cover object-center md:rounded-none rounded-full md:rounded-tl-5xl md:rounded-br-5xl"
                    fluid={image2.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div>
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-full flex items-center md:border-2 md:border-yellow-500 rounded-3xl md:pl-8 md:pr-56 md:py-8  pt-6 md:-mr-48">
                    <div className="space-y-3">
                      <p className="text-yellow-500 text-xl font-thin md:text-left text-center">
                        Jerry Z.
                      </p>
                      <p className="text-gray-600 sm:text-base text-sm pb-2 md:text-left text-center">
                        Volunteering with IEJL has put me in contact with
                        amazing and passionate people to work tirelessly to end
                        corruption. With IEJL, I collaborated and helped put
                        into place a framework to help end corruption.
                      </p>
                    </div>
                  </div>
                  <Img
                    className="md:h-72 md:w-52 sm:w-28 sm:h-28 w-24 h-24 object-cover object-center md:rounded-none rounded-full md:rounded-tl-5xl md:rounded-br-5xl"
                    fluid={image1.childImageSharp.fluid}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselPage;
