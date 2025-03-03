import React from "react";
import { Link } from "react-router-dom"; 

const Cards = ({ card : { id, title, image, link } }) => {
   return (
      <div
         className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
      >
         <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
         />
         
         <h2 className="absolute bottom-0 p-4 bg-black text-white">{title}</h2>
         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start p-4">
            <h3 className="text-white text-lg font-semibold">{title}</h3>

            <div className="mt-auto flex justify-center">
               <button className="text-black text-sm bg-gray-100 px-4 py-1 shadow-md transition-transform duration-300 group-hover:scale-105" >
                  <Link to={`${link}/${id}`}>
                     Read More
                  </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Cards;
