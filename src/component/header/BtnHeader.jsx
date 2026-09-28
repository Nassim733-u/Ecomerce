import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";




const navLink = [
  {title:"Home" , Link:"/"},
  {title:"About" , Link:"/about"},
  {title:"Accessories" , Link:"/accessorie"},
  {title:"Blog" , Link:"/blog"},
  {title:"Contact" , Link:"/contact"}
]

function btnHeader() {

const location = useLocation();
const [categories , setCategories] = useState([])

const [isCtegoryOpen , setCtegoryOpen] = useState(false);

console.log(isCtegoryOpen)
  useEffect(()=>{
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then((data) => setCategories(data));
  }, [])
  
  return (
    <div className='btn_header'>
      <div className="container">
        <nav className="nav">



          <div className="category_nav">
            <div className="category_btn" onClick={()=>setCtegoryOpen (!isCtegoryOpen)}>
                <IoMdMenu />
                <p>Browse Category</p>
                <MdOutlineKeyboardArrowDown />
                 </div>
                    <div className={`category_nav_list ${isCtegoryOpen ? "active" : ""}`}>
                    {categories.map((category)=>(
                     <Link key={category.slug} to= {category.slug}>{category.name}</Link>
                    ))}
   
</div>
</div>
   
   
 
  <div className="nav_links">
        
        {navLink.map((item) =>(
          <li key={item.Link} className={location.pathname === item.Link ? "active" : ""}><Link to={item.Link}>{item.title}</Link></li>
        ))}

  </div>

        </nav>


        <div className="sing_regs_icon">
          <Link><PiSignInBold /></Link>
          <Link><FaUserPlus /></Link>
        </div>
        
      </div>
    </div>
  )
}

export default btnHeader
