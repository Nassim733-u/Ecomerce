import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
          /*   console.error('Error fetching product details:', error);
            setLoading(false); */
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
        <div>
            <h2>{product.title}</h2>
        </div>
    )
}
