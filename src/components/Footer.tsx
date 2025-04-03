
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#2a3339] py-6 mt-10">
      <Separator className="mb-6 bg-gray-600/50" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img src="/lovable-uploads/bf133e72-2193-46e3-bead-33655db17cea.png" alt="COMET Logo" className="h-10" />
            </Link>
          </div>
          <div className="text-center md:text-right text-sm text-white">
            <p className="text-gray-300">
              Designed and Developed by <Link to="#" className="text-white hover:underline">Ujwal Ramesh Karajgikar</Link> & <Link to="#" className="text-white hover:underline">Nishit R Kirani</Link>
            </p>
            <p className="text-gray-300">This event is owned and managed by EMC of BNMIT.</p>
            <p className="text-gray-300">All rights reserved 2025 ©</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/register" className="bg-white text-[#2a3339] px-6 py-2 rounded-md font-medium hover:bg-gray-200 inline-block">
          Register Now!
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
