import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";


 function Product() {
  return (
    <div className='product'>
        <div className="img_product">
          <img src="https://m.media-amazon.com/images/G/32/apple/iPhone/iPhone17Pro/AMZ_Family-Stripe_iPhone_17_pro_max._CB800727195_.png" alt="" />
        </div>
        <p className='name_product'>Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Totam dignissimos sint sit!</p>
           <div className='stars'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
           </div>
           <p className="price">$ 1000</p>
           <div className="icons">
            <span><FaRegHeart /></span>
            <span><FaCartArrowDown /></span>
            <span><FaShare /></span>
            
           </div>
    </div>
  )
}


export default Product