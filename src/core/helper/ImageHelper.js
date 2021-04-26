import React,{useState,useEffect} from 'react'
import { API } from '../../backend'
import { getProductPhoto } from './coreapicalls'

const ImageHelper = ({product}) => {

    const imageUrl = product ? `${API}product/photo/${product._id}` : 
    "https://images.pexels.com/photos/4144982/pexels-photo-4144982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    return (
        <img
        src={imageUrl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
    />
    )
}

export default ImageHelper
