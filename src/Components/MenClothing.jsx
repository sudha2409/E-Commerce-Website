import { useEffect, useState } from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import axios from "axios";
import Category from "./Category";
import EndPoints from "../Api/EndPoints";

const MenClothing = () =>{
    const [mensClothing,setMensClothing] = useState([]);
    useEffect(()=>{
        axios.get(EndPoints.MENCLOTHING_URL)
        .then(response =>{
            console.log(response)
            setMensClothing(response.data)
        })
    })
    return(
        <>
            <Header/>
            <Navbar/>
            <div className="row">
                {
                    mensClothing.map((category,index)=> (<Category key={index} data={category}/>))

                }

        </div>
        </>
    )
}
export default MenClothing;