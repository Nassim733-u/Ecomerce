import React from 'react'
import Product from './Product'
import "./slideProduct.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay } from 'swiper/modules';


import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';


 function SlideProduct({ data , title}) {
  return (
    
    <div className='slide_product slide'> 
        <div className="container">
          <div className="top_slide">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum ullam officia nesciunt aut quod.</p>

          </div>



   <Swiper loop={true} 
              autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} slidesPerView={5} navigation={true} modules={[Navigation , Autoplay]} className="mySwiper">

        {data.map((item) => (
          
          <SwiperSlide key={item.id}> <Product item={item} /></SwiperSlide>
          ))}


    
      </Swiper>

       
       </div>
    </div>
  )
}

export default SlideProduct