import { API } from "../../backend";


export const createCategory = async (userId,token,name) => {
   
    return fetch(`${API}category/create/${userId}`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
        
        body:JSON.stringify(name)
    })
    .then(res => {
         return res.json()
    })
    .catch((e)=>{
        console.log(e);
    })
}

//get category..
export const getCategory = (categoryId) => {
    return fetch(`${API}category/${categoryId}`,{
        method:"GET",
        
    }
    )
    .then(data => {
        return data.json()
    })
    .catch(e=>{
        console.log(e);
    })
}

//get all categories:
export const getAllCategories = () => {
    return fetch(`${API}categories`,{
        method:"GET"
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err);
    })
}

// delete category:
export const deleteCategory = (categoryId,userId,token) => {
    return fetch(`${API}category/${categoryId}/${userId}`,{
        method:'DELETE',
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(data=>{
        return data.json()
    })
    .catch(e => {
        console.log(e);
    })
}

// update category:
export const updateCategory = (categoryId,userId,token,name) => {
    return fetch(`${API}category/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(name)
    })
    .then(data=>{
        return data.json()
    })
    .catch(e=>{
        console.log(e);
    })
}

//product calls:

//create a product:
export const createProduct = (userId,token,product) => {
    return fetch(`${API}product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err);
    })
}

//get all product:
export const getProducts = () => {
    return fetch(`${API}products`,{
        method:"GET"
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err);
    })  
}


//delete a product:
export const deleteProduct = (productId,userId,token) => {
    return fetch(`${API}product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(res => {
        return res.json()
    })
    .catch((e)=>{
        console.log(e);
    })
}



//get a product:
export const getProduct = (productId) => {
    return fetch(`${API}product/${productId}`,{
        method:"GET"
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err);
    })
}


//update a product
export const updateProduct = (productId,userId,token,product) => {
    return fetch(`${API}product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"appliataion/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.log(err);
    })
}