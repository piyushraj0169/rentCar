import React from 'react';
import heroImage from '../assets/hero-banner.png';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pb-20">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[85vh] flex flex-col justify-center items-center text-center bg-cover bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-65 backdrop-blur-sm"></div>
        <div className="relative z-10 p-8 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl animate-fade-in-up">
            Drive the Extraordinary.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
            Experience uncompromised luxury and performance. Your premium car awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Explore Our Fleet
            </button>
            <button className="px-10 py-4 bg-transparent border border-gray-400 hover:border-white hover:bg-white hover:text-black text-gray-200 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      <BookingForm />
      
    </div>
  );
}

export default Home;