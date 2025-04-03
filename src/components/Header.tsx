
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#2a3339] py-4 px-6 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src="/lovable-uploads/bf133e72-2193-46e3-bead-33655db17cea.png" alt="COMET Logo" className="h-10" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About COMET</Link>
          <div className="relative group">
            <Link to="/events" className="text-white hover:text-gray-300 flex items-center">
              Events <span className="ml-1">▼</span>
            </Link>
          </div>
          <Link to="/clubs" className="text-white hover:text-gray-300">Clubs</Link>
          <Link to="/faq" className="text-white hover:text-gray-300">FAQ</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
