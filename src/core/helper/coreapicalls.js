import { API } from "../../backend";

export const getProducts = () => {
    return fetch(`${API}products`,{
        method:"GET"
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err);
    })
}

export const getProductPhoto = (productId) => {
    return fetch(`${API}product/photo/${productId}`)
    .then(res=>{
        return res.json()
    })
    .catch((e)=>{
        console.log(e);
    })
}