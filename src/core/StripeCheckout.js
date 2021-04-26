import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import { cartyEmpty, loadCart } from './helper/cardHelper'
import StripeCheckoutButton from "react-stripe-checkout"
import { API } from '../backend'
import { createOrder } from './helper/OrderHelper'


const StripeCheckout = ({products,setReload = f=>f,reload=undefined}) => {

    const [data,setData] = useState({
        loading:false,
        success:false,
        error:"",
        address:""
    })

    console.log(products);

    const token = isAuthenticated() && isAuthenticated.token
    const userId = isAuthenticated() && isAuthenticated().user.id

    const getFinalPrice= () => {
        let amount = 0
        products.map((product)=>{
            amount =  amount + product.price
        })
        return amount
        
    }

    const makePayment = (token) => {
        const body = {
            token,
            products
        }
        const headers = {
            "Content-Type":"application/json"
        }

        return fetch(`${API}stripepayment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        })
        .then((res) => {
            console.log(res);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    
    return (
        <div className="col-6">
            <h3 className="text-white"> Stripe Checkout loaded {getFinalPrice()}</h3>
            <StripeCheckoutButton
            stripeKey=""
         
            token={makePayment}
            amount={getFinalPrice()}
            name="You are just a step away!"
            shippingAddress
            billingAddress
            />
        </div>
    )
}

export default StripeCheckout
