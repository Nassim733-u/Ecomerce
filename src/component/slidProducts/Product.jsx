import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Product({ item }) {
  console.log(item);

  return (
    <div className='product'>
      <Link to={`/products/${item.id}`}>
      
        <div className="img_product">
          <img src={item.thumbnail} alt="" />
        </div>

        <p className='name_product'>{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
      </Link>

      <div className="icons">
        <span><FaRegHeart /></span>
        <span><FaCartArrowDown /></span>
        <span><FaShare /></span>
      </div>
    </div>

  )
}


export default Product