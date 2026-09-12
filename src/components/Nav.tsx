import Logo from "../assets/logo-text.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100/95 backdrop-blur-md h-[80px] sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto h-full px-4">
        {/* ================= DESKTOP + MOBILE HEADER ================= */}
        <div className="h-full flex items-center justify-between">
          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="w-12 h-12 object-contain"
            />

            {/* Brand name - desktop only */}
            <h1 className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-900 via-violet-700 to-pink-700 bg-clip-text text-transparent">
              Dev Stack
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li className="text-xl font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
              Home
            </li>

            <li className="text-xl font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
              Technologies
            </li>

            <li className="text-xl font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
              Projects
            </li>

            <li className="text-xl font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
              About
            </li>

            <li className="text-xl font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
              Contact
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center gap-2">
            {/* Sign In */}
            <button className="px-3 md:px-5  py-2 rounded-full  font-semibold  text-gray-700  hover:bg-pink-500 hover:text-white transition-all duration-300">
              Sign In
            </button>

            {/* Sign Up */}
            <button className="px-3 md:px-5  py-2 rounded-full  font-semibold  text-gray-700  hover:bg-pink-500 hover:text-white transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col items-center gap-5 py-6">
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors"
              >
                Home
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors"
              >
                Technologies
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors"
              >
                Projects
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors"
              >
                About
              </li>

              <li
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors"
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

