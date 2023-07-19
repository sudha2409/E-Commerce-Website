import axios from "axios";
import { useEffect, useState } from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import Category from "./Category";

const Jewelery = () => {
    const [jewelery , setJewelery] = useState([]);
      

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then((response)=>{
            console.log(response.data);
            setJewelery(response.data)
        })
        .catch(error => console.log(error))
    },[])
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="row">
            {jewelery.map((category,index)=>(<Category key={index} data={category}/>))}
        </div>
        </>

    )
}
export default Jewelery;