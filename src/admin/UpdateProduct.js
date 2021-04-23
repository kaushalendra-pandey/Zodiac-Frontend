import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getProduct } from './helper/adminapicall'

const UpdateProduct = () => {
    const id =  useParams().productId
    

    const preload = () =>{
        getProduct(id)
        .then(data => {
            console.log(data);
        })
    }

    useEffect(() => {
        preload()
       
    }, [])

    return (
        <div>
            <h1 className="text-white"> Update the products here...</h1>
            
        </div>
    )
}

export default UpdateProduct
