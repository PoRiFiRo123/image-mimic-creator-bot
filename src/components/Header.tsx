
import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

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
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-gray-300 flex items-center focus:outline-none">
              Events <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#2a3339] border-[#3a444a] text-white min-w-[160px]">
              <DropdownMenuItem className="hover:bg-[#3a444a] cursor-pointer">
                <Link to="/events/technical" className="w-full">Technical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] cursor-pointer">
                <Link to="/events/non-technical" className="w-full">Non-Technical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] cursor-pointer">
                <Link to="/events/business" className="w-full">Business</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] cursor-pointer">
                <Link to="/events/stalls" className="w-full">Stalls</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/clubs" className="text-white hover:text-gray-300">Clubs</Link>
          <Link to="/faq" className="text-white hover:text-gray-300">FAQ</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
