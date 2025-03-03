import React from "react";
import Cards from "../components/Cards";
import images from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sections } from './../data/community';


const sliderImages = [images.basketballGroup, images.girlshappyGroup, images.techGroup];

const Home = () => {
   return (
      <div className="flex flex-col gap-10">
         <section className="flex flex-col gap-6 bg-red-100 p-10">
            <div className="flex flex-col">
               <h1 className="custom-heading">Community Board</h1>
               <p className="text-sm">
                  Community Board is a platform for connecting with your community. Find local events, projects, and more.
               </p>
            </div>


            <div className="w-full max-w-4xl mx-auto">
               <Swiper modules={[Autoplay, Navigation, Pagination]} spaceBetween={50} slidesPerView={1} loop={true} autoplay={{ delay: 2500 }} pagination={{ clickable: true }}
                  className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
               >
                  {
                     sliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                           <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </div>

         </section>

         {sections.map((section, index) => (
            <section key={index} className={`flex flex-col gap-6 ${section.bgColor} p-10`}>
               <div>
                  <h1 className="custom-heading">{section.title}</h1>
                  <p className="text-sm">{section.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
                     {section?.cards?.map((card, index) => (
                        <div className="h-96" key={`home-cards-${card.id}`}>
                           <Cards key={index} card={ card } />
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         ))}
      </div>
   );
};

export default Home;
