import axios from "axios";
import { useEffect, useState } from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import Category from "./Category";

const Electronics = () => {
    const[electronics,setElectronics] = useState([]);

    useEffect (() => {
        axios.get('https://fakestoreapi.com/products/category/electronics')
        .then(response => {
            console.log(response.data);
            setElectronics(response.data);
        })
    },[])
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="row">
            {electronics.map((category,index)=>(<Category key={index} data = {category}/>))}
        </div>
        </>

    )
}
export default Electronics;