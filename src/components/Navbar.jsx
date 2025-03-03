import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   //standard

   //state

   //function


   return (
      <div className="navbar flex flex-row justify-between items-center w-full min-h-[7vh]">
         <div className='px-4 animate-pulse duration-10000 ease-in opacity-100 hover:opacity-100'>
            <h1 className='border-2 p-2 '><Link to="/">Community Board</Link></h1>
         </div>
         <div className="links flex flex-row justify-end items-center w-[50%] pr-5 font-semibold">
            <div className='flex justify-end gap-6 w-full'>
               <Link className='hover:underline' to="/">Home</Link>
               <Link className='hover:underline' to="/event">Community Events</Link>
               <Link className='hover:underline' to="/food">Food Events</Link>
               <Link className='hover:underline' to="/fun-activity">Activities</Link>
            </div>
         </div>
      </div>
   )
}


export default Navbar;