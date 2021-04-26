import React,{Profiler, useState} from 'react'
import { Redirect } from 'react-router';
import { addItemToCart, removeItemFromCart } from './helper/cardHelper';
import ImageHelper from './helper/ImageHelper';


const Cards = ({product,
    addToCart=true,
    removeFromCart=false,
    setReload = f=>f,
    reload=undefined}) => {

    const [redirect,setRedirect] = useState(false)

    const addToCartHelper = () => {
        addItemToCart(product,()=>{
            setRedirect(true)
        })
    }

    const redirectHelper = redirect => {
        if(redirect){
            return <Redirect to="/cart"/>
        }
    }


    return (

            <div className="card ms-1 text-white bg-dark border border-info mb-4 ">
            <div className="card-header lead"></div>
            <div className="card-body">
                <p className="text-white">{product.description}</p>
                <div className="rounded border border-success p-2">
                    {redirectHelper(redirect)}
                    <ImageHelper product={product}/>
                </div>
                <p className="lead bg-success font-weight-normal text-wrap">
                {product.name}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4"><i className="fas fa-rupee-sign"/> {product.price}</p>
                <div className="row">
                <div className="col-12">
                    {

                        addToCart && (
                            <div className="d-grid gap-2">
                                <button
                                onClick={addToCartHelper}
                                className="btn btn-outline-success mt-2 mb-2"
                                >
                                Add to Cart 
                                </button>
                            </div>
                        )
                    }
                </div>
                <div className="col-12">
                    {
                        removeFromCart && (
                            <div className="d-grid gap-2">
                                <button
                                onClick={()=>{
                                    removeItemFromCart(product._id)
                                    setReload(!reload)
                                }
                            }
                                className="btn btn-block btn-outline-danger mt-2 mb-2"
                                >
                                Remove from cart
                                </button>
                            </div>
                        )
                    }
                </div>
                </div>
            </div>
            </div>
        );
        };



export default Cards
