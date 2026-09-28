import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay , Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

function HeroSlider() {
  return (
       
     <>

        <div className="Hero">
          <div className="container">


              <Swiper loop={true} 
              autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} spaceBetween={30}pagination={{clickable: true, }}modules={[Pagination,Autoplay]}className="mySwiper">
                <SwiperSlide>  
                  <div className="content">
                    <h4>Introducing the new </h4>
                    <h3>Microsoft Xbox <br/>  360 controller</h3>
                    <p>Win=dows Xp/10/8/7,Ps3 ,Tv </p>
                    <Link to ="/" className="btn">Shop new</Link>
                  </div>
                  <img src="/src/img/banner_Hero1.jpg" alt="" />
                </SwiperSlide>


                 <SwiperSlide>  
                  <div className="content">
                    <h4>Introducing the new </h4>
                    <h3>Microsoft Xbox <br/>  360 controller</h3>
                    <p>Windows Xp/10/8/7,Ps3 ,Tv </p>
                    <Link to ="/" className="btn">Shop new</Link>
                  </div>
                  <img src="/src/img/banner_Hero2.jpg" alt="" />
                </SwiperSlide>


                 <SwiperSlide>  
                  <div className="content">
                    <h4>Introducing the new </h4>
                    <h3>Microsoft Xbox <br/>  360 controller</h3>
                    <p>Windows Xp/10/8/7,Ps3 ,Tv </p>
                    <Link to ="/" className="btn">Shop new</Link>
                  </div>
                  <img src="/src/img/banner_Hero3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>  
          </div>
         </div>

      
      
    </>

  )

  
}

export default HeroSlider