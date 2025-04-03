
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
    <header className="bg-[#1c2327] py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src="/lovable-uploads/bf133e72-2193-46e3-bead-33655db17cea.png" alt="COMET Logo" className="h-10" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/gallery" className="text-white font-medium hover:text-[#0FA0CE] transition-colors">Gallery</Link>
          <Link to="/about" className="text-white font-medium hover:text-[#0FA0CE] transition-colors">About COMET</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white font-medium hover:text-[#0FA0CE] transition-colors flex items-center focus:outline-none">
              Events <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#2a3339] border-[#3a444a] text-white min-w-[160px]">
              <DropdownMenuItem className="hover:bg-[#3a444a] hover:text-[#0FA0CE] cursor-pointer transition-colors">
                <Link to="/events/technical" className="w-full">Technical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] hover:text-[#0FA0CE] cursor-pointer transition-colors">
                <Link to="/events/non-technical" className="w-full">Non-Technical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] hover:text-[#0FA0CE] cursor-pointer transition-colors">
                <Link to="/events/business" className="w-full">Business</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3a444a] hover:text-[#0FA0CE] cursor-pointer transition-colors">
                <Link to="/events/stalls" className="w-full">Stalls</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/clubs" className="text-white font-medium hover:text-[#0FA0CE] transition-colors">Clubs</Link>
          <Link to="/faq" className="text-white font-medium hover:text-[#0FA0CE] transition-colors">FAQ</Link>
          <Link to="/contact" className="text-white font-medium hover:text-[#0FA0CE] transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
