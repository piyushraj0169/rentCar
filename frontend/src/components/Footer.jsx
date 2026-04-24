import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-gray-300 py-12 px-6 md:px-16 lg:px-24 xl:px-32 border-t border-neutral-800 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">CarRent</h1>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm">
            Experience uncompromised luxury and performance. We provide world-class vehicles for those who demand the absolute best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/cars" className="hover:text-blue-400 transition-colors">Our Fleet</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Booking Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates on new fleet arrivals and exclusive offers.</p>
          <div className="flex border border-neutral-700 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-neutral-900 px-4 py-2 text-sm text-white outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white text-sm font-semibold transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-gray-500 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} CarRent Luxury. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
