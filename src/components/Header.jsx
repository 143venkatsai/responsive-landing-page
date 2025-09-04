import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { id: 1, name: "Why" },
  { id: 2, name: "Programs" },
  { id: 3, name: "Features" },
  { id: 4, name: "For Parents" },
  { id: 5, name: "FAQ" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-4 py-5 lg:px-35 md:px-6 bg-white shadow-sm">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-xl mr-2 bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center shadow-md"></div>
          <span className="font-bold text-lg text-gray-800">Topmind Care</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="text-purple-600 font-bold cursor-pointer hover:text-purple-800 transition"
            >
              {item.name}
            </li>
          ))}
          <li className="bg-purple-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-purple-700 transition">
            Start Free
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700 text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Menu - Pushes content down */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-5">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="text-purple-600 font-bold cursor-pointer hover:text-purple-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </li>
            ))}
            <li
              className="bg-purple-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-purple-700 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Start Free
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
