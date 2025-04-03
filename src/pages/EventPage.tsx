
import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import EventDetails from '../components/EventDetails';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const EventPage = () => {
  const breadcrumbPaths = [
    { name: 'HOME', path: '/' },
    { name: 'UNDER25 EVENTS', path: '/events/under25' }
  ];

  const eventData = {
    title: 'MELODIC MASTERY',
    category: 'UNDER25',
    description: [
      'Is a two-round instrumental showdown.',
      'Participants perform for 5-6 minutes in Round 1, with the top 5 advancing to Round 2 for a 10-minute performance.',
      'Any instrument is allowed, but no pre-recorded tracks.',
      'Participants must bring their own instruments.',
      'Judging is based on technique, creativity, and expression.'
    ],
    details: {
      timings: '9 AM - 10 AM',
      teamSize: 1,
      prizePool: '₹3000/-',
      registrationFee: '₹85/-',
      roomNumber: '000'
    },
    organizers: [
      { name: 'NISHIT', contact: '1234567890' },
      { name: 'SRIJA', contact: '0987654321' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#2a3339]">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="mt-8">
          <Breadcrumbs 
            paths={breadcrumbPaths} 
            currentPage="MELODIC MASTERY" 
          />
          
          <EventDetails 
            title={eventData.title}
            category={eventData.category}
            description={eventData.description}
            details={eventData.details}
            organizers={eventData.organizers}
          />
          
          <TicketSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default EventPage;
