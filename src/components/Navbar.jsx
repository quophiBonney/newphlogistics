import React, { useState } from "react";
import { Navbar} from "flowbite-react";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <Navbar fluid className="bg-gray-800 lg:px-10 py-5">
        {/* Logo */}
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            My Logo
          </span>
        </Navbar.Brand>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 items-center list-none">
          <Navbar.Link href="/" className="text-white no-underline">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-white no-underline">
            About
          </Navbar.Link>
          <Navbar.Link href="/services" className="text-white no-underline">
            Services
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-white no-underline">
            Contact
          </Navbar.Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleNavbar}
          className="bg-white rounded lg:hidden p-2 text-gray-800 hover:text-gray-400"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </Navbar>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={closeNavbar}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu Links */}
        <div className="mt-16 p-4 flex flex-col gap-4 list-none">
          <a href="/" onClick={closeNavbar} className="text-white no-underline">
            Home
          </a>
          <a href="/about" onClick={closeNavbar} className="text-white no-underline">
            About
          </a>
          <a href="/services" onClick={closeNavbar} className="text-white no-underline">
            Services
          </a>
          <a href="/contact" onClick={closeNavbar} className="text-white no-underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
