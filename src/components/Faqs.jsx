import React, { useState } from "react";

const faqs = [
  {
    question: "What ages is this for?",
    answer: "",
  },
  {
    question: "How long are the sessions?",
    answer: "",
  },
  {
    question: "Is it safe and ad-free?",
    answer:
      "Yes. We designed this for children. No external ads, clear privacy options, and parent controls.",
  },
  {
    question: "Can schools use it?",
    answer: "",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="px-4 py-8 lg:px-35 mt-10">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="w-full bg-white rounded-2xl shadow-sm border border-violet-50">
        {faqs.map((item, idx) => (
          <div
            key={item.question}
            className={`border-b last:border-none border-violet-100`}
          >
            <button
              onClick={() => handleToggle(idx)}
              className="w-full text-left px-6 py-5 font-semibold text-md lg:text-lg flex justify-between items-center focus:outline-none transition"
              style={{ cursor: "pointer" }}
            >
              <span>{item.question}</span>
              <span className="text-xl text-gray-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 pt-0 text-gray-500 text-sm lg:text-base animate-fadeInAccordion">
                {item.answer || "No additional information available."}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fadeInAccordion {
            0% { opacity: 0; transform: translateY(-10px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInAccordion {
            animation: fadeInAccordion 0.3s ease;
          }
        `}
      </style>
    </section>
  );
};

export default Faqs;
