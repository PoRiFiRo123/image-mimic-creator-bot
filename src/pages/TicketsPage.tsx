
import React from 'react';
import Header from '../components/Header';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const TicketsPage = () => {
  return (
    <div className="min-h-screen bg-[#2a3339]">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="mt-8">
          <TicketSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default TicketsPage;
