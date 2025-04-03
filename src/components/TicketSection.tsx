
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface TicketOption {
  type: string;
  price: number;
  available: boolean;
}

const TicketSection = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketOptions: TicketOption[] = [
    { type: 'Non-Members', price: 120, available: false },
    { type: 'Members', price: 60, available: false }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 border-r border-gray-200">
          <div className="text-center py-4 border-b border-gray-200">
            <div className="inline-block bg-red-400 rounded-full p-4 mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-purple-900">Pick Tickets</div>
          </div>
          
          <div className="text-center py-4 border-b border-gray-200">
            <div className="inline-block bg-white rounded-full p-4 mb-2 border border-gray-200">
              <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-purple-900">Attendee Details</div>
          </div>
          
          <div className="text-center py-4">
            <div className="inline-block bg-white rounded-full p-4 mb-2 border border-gray-200">
              <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-purple-900">Payment</div>
          </div>
        </div>
        
        <div className="w-full md:w-2/4 px-4 py-6">
          {ticketOptions.map((ticket, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-md p-4 mb-4 cursor-pointer"
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <div className="text-purple-900 font-medium">{ticket.type}</div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-xl font-bold">₹ {ticket.price}</div>
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-500"
                  disabled={true}
                >
                  Expired
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-md">
          <div className="flex justify-center items-center mb-4">
            <ShoppingCart className="text-purple-300 w-12 h-12" />
          </div>
          <div className="text-center text-purple-900">
            <p>You haven't selected any ticket.</p>
            <p>Select a ticket to see the ticket summary.</p>
          </div>
          <button className="w-full mt-8 bg-red-400 text-white py-3 rounded-md">
            Proceed
          </button>
        </div>
      </div>
      
      <div className="text-center mt-10 border-t border-gray-200 pt-4">
        <p className="text-gray-500 mb-2">Powered By</p>
        <div className="flex justify-center">
          <span className="text-purple-900 font-bold">KON</span>
          <span className="text-red-500 font-bold">F</span>
          <span className="text-purple-900 font-bold">HUB</span>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
