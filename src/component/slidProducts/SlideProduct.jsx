import React from 'react'
import Product from './Product'
import "./slideProduct.css"

 function SlideProduct() {
  return (
    
    <div className='slide_product slide'> 
        <div className="container">
          <div className="top_slide">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum ullam officia nesciunt aut quod.</p>

          </div>


        <Product />
       </div>
    </div>
  )
}

export default SlideProduct