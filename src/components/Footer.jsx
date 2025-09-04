import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mx-4 mt-20 lg:mx-35 border-t border-violet-100 py-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 opacity-0 animate-fadeIn">
        <div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-xl mr-2 bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center shadow-md"></div>
            <span className="font-bold text-lg text-gray-800">
              Topmind Care
            </span>
          </div>
          <p className="text-gray-500 mt-2 text-sm">
            Mindfulness for growing minds. &copy; 2025 Mindery Kids.
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Contact</p>
          <ul className="flex items-center gap-4 text-violet-700 cursor-pointer">
            {["Instagram", "Youtube", "X"].map((item) => (
              <li
                key={item}
                className="hover:text-violet-900 transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Legal</p>
          <ul className="flex items-center gap-2 text-violet-700 cursor-pointer">
            <li className="hover:text-violet-900 transition-colors duration-300">
              Privacy
            </li>
            <li>&#8226;</li>
            <li className="hover:text-violet-900 transition-colors duration-300">
              Terms
            </li>
          </ul>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0;}
              to { opacity: 1;}
            }
            .animate-fadeIn {
              animation: fadeIn 1s ease forwards;
            }
          `}
        </style>
      </footer>
    </>
  );
};

export default Footer;
