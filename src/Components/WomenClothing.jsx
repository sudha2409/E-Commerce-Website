import { useEffect, useState } from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import axios from "axios";
import Category from "./Category";
import EndPoints from "../Api/EndPoints";

const WomenClothing = () =>{
    const [womensClothing,setWomensClothing] = useState([]);
    useEffect(()=>{
        axios.get(EndPoints.WOMENCLOTHING_URL)
        .then(response =>{
            console.log(response)
            setWomensClothing(response.data)
        })
    })
    return(
        <>
            <Header/>
            <Navbar/>
            <div className="row">
                {
                    womensClothing.map((category,index)=> (<Category key={index} data={category}/>))

                }

        </div>
        </>
    )
}
export default WomenClothing;