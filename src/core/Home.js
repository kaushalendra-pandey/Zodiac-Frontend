import React,{useState,useEffect} from 'react'
import '../styles.css'
import {API} from "../backend"
import Base from "./Base"
import Cards from "./Cards"
import { getProducts } from './helper/coreapicalls'


export default function Home() {

    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)

    const loadProducts = () => {
        getProducts()
        .then(data => {
            if(data.error){
                setError(data.error)
            }else{
                console.log(data);
                setProducts(data)
            }
        })
    }

    useEffect(()=>{
        loadProducts()
    },[])


    return (
        <Base title="Home page" description="Get Your tees here!!!" className="d-flex">
            <div className="d-flex text-center">
               {
                   products.map((product,index)=> {
                       return (
                         <Cards product={product}/>
                      )
                   })
               }
               
            </div>
        </Base>
    )
}
