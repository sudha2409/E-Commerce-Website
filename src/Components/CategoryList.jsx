import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                // console.log(response.data);
                setCategories(response.data)
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="container">
            <div class="row">
                {
                    categories.map((category,index)=><Category key={index} data={category}/>)
                }
             
            </div>

        </div>

    )
}
export default CategoryList;