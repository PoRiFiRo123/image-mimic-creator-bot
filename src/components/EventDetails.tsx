
import React from 'react';

interface EventDetailsProps {
  title: string;
  category: string;
  description: string[];
  details: {
    timings: string;
    teamSize: number;
    prizePool: string;
    registrationFee: string;
    roomNumber: string;
  };
  organizers: {
    name: string;
    contact: string;
  }[];
}

const EventDetails = ({ title, category, description, details, organizers }: EventDetailsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 bg-black text-white flex justify-center items-center p-10 mb-6 md:mb-0">
          <div className="text-center">
            <div className="text-5xl font-bold">A4</div>
            <div className="text-5xl font-bold">POSTER</div>
          </div>
        </div>
        
        <div className="w-full md:w-3/5 md:pl-10">
          <h1 className="text-3xl font-bold uppercase">{title}</h1>
          <h2 className="text-xl uppercase mb-6">{category}</h2>
          
          {description.map((para, index) => (
            <p key={index} className="mb-4">{para}</p>
          ))}
          
          <div className="mt-6 grid grid-cols-2 gap-y-2">
            <div className="font-bold">TIMINGS / DURATION</div>
            <div className="text-right">{details.timings}</div>
            
            <div className="font-bold">TEAM SIZE</div>
            <div className="text-right">{details.teamSize}</div>
            
            <div className="font-bold">PRIZE POOL</div>
            <div className="text-right">{details.prizePool}</div>
            
            <div className="font-bold">REGISTRATION FEE</div>
            <div className="text-right">{details.registrationFee}</div>
            
            <div className="font-bold">ROOM NUMBER</div>
            <div className="text-right">{details.roomNumber}</div>
            
            <div className="font-bold col-span-2 mt-4">ORGANIZERS DETAILS</div>
            
            {organizers.map((organizer, index) => (
              <React.Fragment key={index}>
                <div className="font-bold">{organizer.name}</div>
                <div className="text-right">{organizer.contact}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
