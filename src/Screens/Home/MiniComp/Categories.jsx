import React, { useEffect, useState } from 'react'

import './categorie.css';
import { useNavigate } from "react-router-dom";
import { url } from '../../../Address';
import axios from 'axios';

function Categories({ props }) {

    const{baseUrl,route,getProductByCategory}=url

    const navigate = useNavigate()

    const gotocategorisProduct = async(e) => {

        await axios.post(baseUrl+route+getProductByCategory,{
            category:e
        },{withCredentials: true }).then(res=>{
           // console.log(res.data)
            navigate('/allProduct', { state: res.data.products })

        }).catch(error=>{
           // console.error(error)
        })

    }

    return (
        <div className='cat-container'>

            {props && props.map((category, index) =>
                <div
                    onClick={() => gotocategorisProduct(category.name)}
                    key={index} className="cat clickP">
                    <img
                        className='cate'
                        src={category?.image?.url} alt="categories" />

                    <text className='categoryName' 
                     style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold', }}>

                        {category.name}

                    </text>
                </div>)}


        </div>  
    )
}

export default Categories