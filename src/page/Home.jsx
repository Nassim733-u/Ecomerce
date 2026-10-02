import React, { useEffect , useState} from 'react'
import HeroSlider from '../component/HeroSlider'
import SlideProduct from '../component/slidProducts/SlideProduct'


const categorie = [
  "smartphones",
  "laptops",
  "mobile-accessories",
  "sports-accessories",
  "sunglasses" ,
  "tablets"
]


function Home(){

  const [products, setProducts] = useState({});

  const [loding, setLoding] = useState(true);

  useEffect(() => {
      const fetchProduct = async() => {
        try{
            const result = await Promise.all(
              categorie.map(async (category)=>{
                const res = await fetch(`https://dummyjson.com/products/category/${category}`)
                const data = await res.json();
                return { [category] : data.products};
              })
            )

            const productsData = Object.assign({}, ...result);
            setProducts(productsData);

           


        } catch(error){
                console.error('Error fetching products:', error); 
              }finally{
                setLoding(false);
              }
      }

      fetchProduct();


  },[])

console.log(products);




  return (
    <div>
      <HeroSlider />
      
      {loding ? (
        <p>Loading...</p>
      ) : (
        categorie.map((category) => (
        <SlideProduct key={category} data={products[category]}  title={category.replace("-"," ")}/>
      ))
      )}
    

    </div>
  )
}

export default Home