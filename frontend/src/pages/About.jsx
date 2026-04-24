import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Our Story
        </h1>
        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed">
            <p>
              Founded on the belief that driving should be an <span className="text-white font-semibold">unforgettable experience</span>, our fleet offers nothing but the finest luxury and performance vehicles on the road today.
            </p>
            <p>
              We meticulously curate our collection to ensure every journey you embark upon is enveloped in prestige. Whether you're making an entrance at a gala, navigating coastal roads, or simply demanding the absolute best for your weekend getaway, our vehicles are primed to exceed your expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 py-8 border-t border-white/10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                <p className="text-blue-400 text-sm tracking-wider uppercase">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                <p className="text-blue-400 text-sm tracking-wider uppercase">Luxury Vehicles</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">5k+</h3>
                <p className="text-blue-400 text-sm tracking-wider uppercase">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
