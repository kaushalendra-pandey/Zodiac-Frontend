import { API } from "../../backend";

export const createOrder = (userId,token,orderData) => {
    return fetch(`${API}order/create/${userId}`,{
        method:"post",
        header:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Beare ${token}`
        },
        body:JSON.stringify({ordr:orderData})
    })
    .then(res=>{
        return res.json()
    })
    .catch(e => {
        console.log(e);
    })
}