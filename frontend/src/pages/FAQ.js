import React, { useState } from "react";

// Custom Chevron Icon
const ChevronDownIcon = ({ className, rotated }) => (
  <svg
    className={`${className} ${rotated ? "rotate-180" : ""} transition-transform duration-300`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#0b0b2a] dark:text-cyan-300"
    />
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "What are custom software solutions?",
      answer:
        "Custom software solutions are tailored applications built to address unique business challenges, ensuring scalability, security, and competitive advantage unlike generic off-the-shelf tools.",
    },
    {
      question: "Why choose TechTornix for custom software development?",
      answer:
        "TechTornix stands out with its team of expert developers, innovative approach, and commitment to client success. We provide complete application development from UI/UX designing to CI/CD, using the latest technologies to transform your business digitally.",
    },
    {
      question: "Which industries do you serve with custom software?",
      answer:
        "We serve a wide range of industries including healthcare, finance, e-commerce, education, logistics, and more, delivering tailored solutions that enhance productivity and growth.",
    },
    {
      question: "How secure are your custom software solutions?",
      answer:
        "Security is our top priority. All employees are bound by confidentiality and non-disclosure clauses. For sensitive projects, we create isolated development environments disconnected from public networks, and we follow best practices for data protection and compliance.",
    },
    {
      question: "What is the timeline for custom software development?",
      answer:
        "The timeline varies based on project complexity, but typically ranges from 3-6 months for standard projects. We use Agile methodology for faster iterations and can provide a precise estimate after initial consultation.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-[#111827] py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
  <h1 className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
    Frequently Asked Questions
  </h1>

  {/* Container with subtle top border, softly rounded top corners */}
  <div className="w-full border-t-2 border-[#01cfff] rounded-t-3xl overflow-hidden">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`${index === 0 ? '' : 'border-t border-gray-300 dark:border-gray-600'} last:border-b`}
      >
        {/* Question Button */}
        <button
          onClick={() => toggleItem(index)}
          className="w-full flex justify-between items-center py-4 sm:py-5 text-gray-900 dark:text-white text-left text-base sm:text-lg md:text-xl font-medium focus:outline-none px-4 sm:px-6 md:px-8"
        >
          <span>{faq.question}</span>
          <ChevronDownIcon
            className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0"
            rotated={openIndex === index}
          />
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === index ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-700 dark:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8">
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default FAQ;