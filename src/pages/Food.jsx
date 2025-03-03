import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { sections } from '../data/community';


const Food = () => {
   //standard
   const params = useParams();
   const [cardDetail, setCardDetail] = useState({});


   console.log(params);
   //state
   useEffect(() => {
      if (Object.keys(params).length !== 0) {
         const card = sections[1].cards.find(card => card.id == params.id);
         setCardDetail(card);
      }
   }, [params]);

   //function

   return (
      <div>
         {
            Object.keys(params).length == 0 ? (
               <div className='flex flex-col'>
                  <div>
                     <h1 className='text-xl font-bold mt-10 px-4'>All current events</h1>
                  </div>

                  <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 gap-6 mt-6 gap-y-30">
                     {
                        sections[1].cards.map((card, index) => (
                           <div className='h-35 w-full bg-white shadow-lg rounded-2xl mb-3' key={`allCards-${index}`}>
                              <div className=''>
                                 <h1 className='bg-black text-white p-4'>{card.title}</h1>
                                 <img src={card.image} alt={card.title} className='w-full h-35 object-cover' />
                                 <div className='p-4 bg-black text-white flex w-full justify-center items-center'>
                                    <button>
                                       <Link to={`${card.id}`}>Read More</Link>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            ) : (
               <div>
                  <h1 className='text-xl font-bold mt-10 px-4 pt-7 pb-5'>Event Details</h1>
                  <div className='h-35 w-full bg-white shadow-lg rounded-2xl mb-3'>
                     <div className=''>
                        <h1 className='bg-black text-white font-bold p-7'>{cardDetail.title}</h1>
                        <img src={cardDetail.image} alt={cardDetail.title} className='w-full h-105 object-cover' />
                        <div className='flex flex-col p-4 bg-gray-100 text-black flex w-full justify-center items-center mt-20 min-h-[30vh]'>
                           <p>
                              {cardDetail.description}
                           </p>
                           <button className='mt-5 bg-black text-white p-2 rounded-lg'>
                              Coming soon
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   )
}


export default Food;