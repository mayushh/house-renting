// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-customPurple text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Opening Hours */}
        <div className='border-r border-gray-500'>
          <h4 className="font-bold mb-2">Opening Hours</h4>
          <ul className="space-y-1">
            <li className="text-gray-400">Mon-Fri: 9am - 6pm</li>
            <li className="text-gray-400">Sat: 10am - 4pm</li>
            <li className="text-gray-400">Sun: Closed</li>
          </ul>
        </div>

        {/* Links */}
        <div className='border-r border-gray-500'>
          <h4 className="font-bold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Find Us */}
        <div className='border-r border-gray-500'>
          <h4 className="font-bold mb-2">Find Us</h4>
          <ul className="space-y-1">
            <li className="text-gray-400">123 Main Street, City</li>
            <li className="text-gray-400">State, 12345</li>
            <li className="text-gray-400">(123) 456-7890</li>
            <li><a href="mailto:info@yourcompany.com" className="hover:text-gray-400">info@yourcompany.com</a></li>
          </ul>
        </div>
    
        {/* Properties */}
        <div>
          <h4 className="font-bold mb-2 ">Properties</h4>
          <div className="space-y-1">
            <div ><a href="/property1" className="hover:text-gray-400">Apartment</a></div>
            <div ><a href="/property2" className="hover:text-gray-400">Villas</a></div>
            <div ><a href="/property3" className="hover:text-gray-400">Houses </a></div>
            <div ><a href="/property4" className="hover:text-gray-400">Commercial</a></div>
          </div>
        </div>
      </div>
      {/* Company Info */}
       {/* Divider */}
       <div className="border-t border-gray-500 my-4"></div>
      <div className="container mx-auto mt-4 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
