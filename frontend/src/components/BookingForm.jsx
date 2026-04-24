import React from 'react';

const cities = [
  "Chandigarh",
  "Mohali",
  "Panchkula",
  "Zirakpur",
  "Derabassi",
  "Ambala",
  "Ludhiana",
  "Jalandhar",
  "Patiala",
  "Bathinda"
];

const BookingForm = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <form className="flex flex-col md:flex-row gap-4 md:gap-6 items-end">
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-200 mb-2">Pick-up Location</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <select className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-800 transition shadow-inner appearance-none">
                <option value="" disabled selected className="text-gray-500">From</option>
                {cities.map((city) => (
                  <option key={city} value={city} className="text-black">{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-200 mb-2">Pick-up Date</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-800 transition shadow-inner appearance-none [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-200 mb-2">Return Date</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-800 transition shadow-inner appearance-none [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button 
              type="button" 
              className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] h-[50px] flex items-center justify-center whitespace-nowrap"
            >
              Search
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;
