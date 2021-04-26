import React,{useState,useEffect} from 'react'
import '../styles.css'
import {API} from "../backend"
import Base from "./Base"
import Cards from "./Cards"
import { loadCart } from './helper/cardHelper'
import StripeCheckout from './StripeCheckout'


export default function Cart() {

    const [products,setProducts] = useState([])
    const [reload,setReload] = useState(false)

    useEffect(()=>{
        setProducts(loadCart())

    },[reload])

    const loadAllProduct = () => {
         
        return (
            <div className="col-6">
                <h2> This is to load products...</h2>
                {
                    products.map((product,index)=>{
                        return(
                        <Cards
                        product={product}
                        key={index}
                        addToCart={false}
                        removeFromCart={true}
                        setReload={setReload}
                        reload = {reload}
                        />
                        )
                    })
                    
                }
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div className="col-6">
                <h2>
                    Checkout page
                </h2>
            </div>
        )
    }


    return (
        <Base title="Cart page" description="Ready to Checkout">
            <div className="row text-center text-white">
                {loadAllProduct()}
                <StripeCheckout
                products={products}
                setReload={setReload}
                />
            </div>
        </Base>
    )
}
