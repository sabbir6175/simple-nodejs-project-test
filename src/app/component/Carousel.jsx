// components/Carousel.jsx

"use client"; // This will make the component work only on the client side (nextjs specific)

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Basic Swiper CSS
// Import necessary modules
import 'swiper/css/navigation'; // Navigation CSS
import 'swiper/css/pagination'; // Pagination CSS
import 'swiper/css/autoplay'; // Autoplay CSS

// Add Swiper modules to Swiper instance

const Carousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-[72px] ">
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Number of slides visible at once
        navigation={true} // Enable next/prev buttons
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{
          delay: 2000, // Autoplay delay set to 2000ms (2 seconds)
          disableOnInteraction: false, // Keep autoplay even when user interacts
        }}
      >
        <SwiperSlide>
          <div className="relative overflow-hidden  shadow-lg">
            <img
              src="https://i.ibb.co.com/3ycDVjCq/download.jpg"
              alt="Slide 1"
              className="w-full h-[500px]"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden  shadow-lg">
            <img
              src="https://i.ibb.co.com/nNPXf29f/4er7mj1598733193.jpg"
              alt="Slide 1"
              className="w-full h-[500px]"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden  shadow-lg">
            <img
              src="https://i.ibb.co.com/nNPXf29f/4er7mj1598733193.jpg"
              alt="Slide 1"
              className="w-full h-[500px]"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden  shadow-lg">
            <img
              src="https://i.ibb.co.com/nNPXf29f/4er7mj1598733193.jpg"
              alt="Slide 1"
              className="w-full h-[500px]"
            />
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
