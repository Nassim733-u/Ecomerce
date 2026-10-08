import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./ProductDetails.css"
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
export default function ProductDetils() {
    const { id } = useParams();


    console.log(id);

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchProductDetails = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
            setLoading(false);


        } catch (error) {

            console.log(error);
          
        }
    }
    fetchProductDetails();
}, [id])

console.log(product);

if (loading) {
    return <p>Loading product details...</p>;
}   if (!product) {
    return <p>Product not found.</p>;
}

    return (
        <div className='product_details'>
            <div className="container">

                <div className="img_item">


                    <div className="big_img">

                        <img src={product.images[0]} alt={product.title} />


                        <div className="sm_img">

                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
                            ))}
                        </div>
                        </div>         
-                </div>



                <div className="details_item">
                    <h1 className='name'>{product.title}</h1>
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                    
                    <p className='price'>Price: ${product.price}</p>
                    <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                    <h5>Brand: <span>{product.availabilityStatus}</span></h5>
                    <h5>Stock: <span>{product.availabilityStatus}</span></h5>
                </div>
            </div>
            
        </div>




    )
}
