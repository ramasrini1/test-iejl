import React, { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import Modal from "../Modal/Modal";

export default function FAQ() {
  const sections = [
    {
      sectionTitle: 'General',
      faqs: [
        {
          question: 'Is IEJL a nonprofit organization?',
          answer: 'Yes, the International Economic Justice League, Inc. (IEJL) is a California nonprofit 501(c)(3) corporation, founded in 2016.'
        },
        {
          question: 'What is corruption?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'What is the impact of corruption?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'Where is corruption prevalent?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'Chapters',
      faqs: [
        {
          question: 'Can I start a chapter near me?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'Pledge Questions',
      faqs: [
        {
          question: 'What is a Pledge?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'Is there a cost to become a Pledge?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'How do I become a Pledge?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'How do I earn points?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'Employers',
      faqs: [
        {
          question: 'How do I post jobs?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'Retailers',
      faqs: [
        {
          question: 'How do I apply to become a retailer?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'IEJL Live!',
      faqs: [
        {
          question: 'How do I log into IEJL Live!?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'What is IEJL Live!?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'IEJL Library',
      faqs: [
        {
          question: 'What type of content is in the IEJL Library?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'How do I earn points using the Library?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
    {
      sectionTitle: 'Award Level',
      faqs: [
        {
          question: 'What are the different Award Levels?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
        {
          question: 'What are the benefits of leveling up to higher Award Levels?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. In aliquam sem fringilla ut morbi tincidunt augue.'
        },
      ]
    },
  ];

  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const toggleFaqModal = (question, answer) => {
    if (!faqModalOpen) {
      setCurrentQuestion(question);
      setCurrentAnswer(answer);
    }
    else {
      setCurrentQuestion('');
      setCurrentAnswer('');
    }
    setFaqModalOpen(!faqModalOpen);
  };

  return (
    <section>
      <div className="flex flex-col items-center lg:px-10 bg-format-background">
        <div className="flex flex-col justify-center items-center text-center w-full h-120">
          <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
            FAQ
          </h3>
          <div className="flex items-center bg-white shadow-md px-4 my-20 w-5/6 lg:w-200">
            <FiSearch className="text-3xl" />
            <input 
              placeholder="Type keywords to find answers..."
              className="focus:outline-none focus:ring-0 mx-2 px-2 py-4 w-full text-sm sm:text-base md:text-md" 
            />
            <div className="flex items-center bg-white text-sm sm:text-base md:text-md lg:text-lg gap-2 text-format-secondary hover:text-format-primary font-semibold cursor-pointer">
              Search <FiArrowRight />
            </div>
          </div>
          <text className="text-md sm:text-base lg:text-lg">
            You can also browse the topics below to find what you are looking for. 
          </text>
        </div>
        <div className="flex flex-wrap w-full mb-20">
          {sections.map(
            ({ sectionTitle, faqs }, idx) => (
              <div key={idx} className="w-full md:w-1/2 xl:w-1/3">
                <div className="flex flex-col mx-6 md:mx-10 xl:mx-16 h-min md:h-96 border-t-2 border-gray-300">
                  <h3 className="pt-8 font-heading text-3xl sm:text-4xl text-black-hakkei">
                    {sectionTitle}
                  </h3>
                  <div className="md:flex-grow mt-6 mb-10 md:mb-0 space-y-2 text-md lg:text-base">
                    {faqs.map(
                      ({ question, answer }) => (
                        <>
                          <div key={question} className="hover:font-semibold cursor-pointer" onClick={() => toggleFaqModal(question, answer)}>
                            {question}
                          </div>
                        </>
                      )
                    )}
                  </div>
                  <div className="flex items-center mb-12 gap-2 font-semibold text-format-secondary hover:text-format-primary cursor-pointer text-md lg:text-base">
                    View all questions <FiArrowRight />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Modal show={faqModalOpen} handler={toggleFaqModal} question={currentQuestion} answer={currentAnswer} />
    </section>
  );
}