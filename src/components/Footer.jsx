import React from "react";

const Footer = () => {
   return (
      <footer className="bg-black text-white p-6 md:p-10 min-h-[15vh] flex flex-col items-center md:items-start">
         <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

            <div className="text-center md:text-left">
               <h1 className="text-2xl font-bold">COMMUNITY BOARD</h1>
               <p className="text-sm text-gray-400 mt-2 max-w-sm">
                  A platform to connect with your local community, find events, food, and projects.
               </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
               <div>
                  <h2 className="text-lg font-semibold">Quick Links</h2>
                  <ul className="text-gray-400 text-sm mt-2 space-y-1">
                     <li><a href="/events" className="hover:underline">Events</a></li>
                     <li><a href="/food" className="hover:underline">Food</a></li>
                     <li><a href="/fun-activity" className="hover:underline">Fun activity</a></li>
                     <li><a href="/about" className="hover:underline">About Us</a></li>
                  </ul>
               </div>

               <div>
                  <h2 className="text-lg font-semibold">Support</h2>
                  <ul className="text-gray-400 text-sm mt-2 space-y-1">
                     <li><a href="/faq" className="hover:underline">FAQ</a></li>
                     <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                     <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                     <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="w-full text-center text-gray-500 text-xs border-t border-gray-700 mt-6 pt-4">
            © {new Date().getFullYear()} Community Board. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
