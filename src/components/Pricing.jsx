import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 mt-8">
      <h1 className="text-5xl font-bold mb-8 text-black">Plans and Pricing</h1>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full md:w-80 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-center mb-4 text-black">Package 1</h2>
            <p className="text-4xl font-bold text-center mb-4 text-black">$105 <span className="text-sm">/ week</span></p>
            <p className="text-center mb-4 text-black">For up to 4-6 persons</p>
            <ul className="mb-8 text-black">
              <li className="mb-2">Tourist Guide</li>
              <li className="mb-2">Airport Assistance</li>
              <li className="mb-2">Hotel Reservation</li>
              <li className="mb-2">Buffet</li>
            </ul>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Get Started</button>
        </div>
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full md:w-80 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-center mb-4 text-black">Package 2</h2>
            <p className="text-4xl font-bold text-center mb-4 text-black">$210 <span className="text-sm">/ month</span></p>
            <p className="text-center mb-4 text-black">For up to 7-12 persons</p>
            <ul className="mb-8 text-black">
              <li className="mb-2">Tourist Guide</li>
              <li className="mb-2">Airport Assistance</li>
              <li className="mb-2">Hotel Reservation</li>
              <li className="mb-2">Private Car Rental</li>
              <li className="mb-2">Buffet</li>
            </ul>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Get Started</button>
        </div>
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full md:w-80 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-center mb-4 text-black">Package 3</h2>
            <p className="text-4xl font-bold text-center mb-4 text-black">$330 <span className="text-sm">/ unlimited</span></p>
            <p className="text-center mb-4 text-black">For up to 12-20 persons</p>
            <ul className="mb-8 text-black">
              <li className="mb-2">Tourist Guide</li>
              <li className="mb-2">Airport Assistance</li>
              <li className="mb-2">Hotel Reservation</li>
              <li className="mb-2">Private Car Rental</li>
              <li className="mb-2">Buffet</li>
              <li className="mb-2">Priority Customer</li>
            </ul>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Get Started</button>
        </div>
      </div>
      <p className="mt-4 text-black mt-8">Contact us for Enterprise plans or for teams larger than 25 members.</p>
    </div>
  );
};

export default Pricing;
