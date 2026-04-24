import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl transition hover:bg-white/10 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">Sector 17<br/>Chandigarh,Punjab,India</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl transition hover:bg-white/10 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+91 2330169000<br/>+91 2330169263</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl transition hover:bg-white/10 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">carrental@luxury.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500" placeholder="Enter Your First Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500" placeholder=" Enter Your Last Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500" placeholder="Enter Your Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 bg-neutral-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none" placeholder="Enter Your Message"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
