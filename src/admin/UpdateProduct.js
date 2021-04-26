import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getProduct, getAllCategories, updateProduct } from './helper/adminapicall'


const AddProduct = () => {

    const productId =  useParams().productId

    const {user,token} = isAuthenticated()

    const [success,setSuccss] = useState(false)
    const [error,setError] = useState(false)
    const [values,setValues] = useState({
        name:'',
        description:"",
        price:"",
        stock:"",
        photo:"",
        category:"",
        categories:[],
        loading:false,
        getRedirecct:false,
        formData:""

    })

    const {name,description,price,stock,category,categories,getRedirecct,formData} = values

    const preload = () => {
        getProduct(productId)
        .then(data => {
            console.log(data);
            if(data.error){
               console.log(data.error);
            }else{
                setValues({...values,
                    name:data.name,
                    description:data.description,
                    price:data.price,
                    stock:data.stock,
                    category:data.category._id,
                    formData:new FormData(),
                    
                })
                // preloadCategories()
            }
        })
    }

    const preloadCategories = () => {
        getAllCategories()
        .then(data => {
            if(data.err){
                setError(true)
            }
            setValues({...values,
                categories:data.categories,
                formData:new FormData()})
        })
    }

    useEffect(()=>{
        preload()
        preloadCategories()
    },[])

    const handleChange = name => e => {
        const value = name === "photo" ? e.target.files[0] : e.target.value
        formData.set(name,value)
        setValues({
            ...values,
            [name]:value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            error:"",
            loading:true
        })
        updateProduct(productId,user.id,token,formData)
        .then(data=>{
            if(data.error){
                setSuccss(false)
                setError(true)
            }else{
                setSuccss(true)
                setError(false)
                preload()
            }
        })
    }

    const successMessage = () => (
        <div className="alert alert-success mt-3">
            <h4>Update Successfull!!</h4>
        </div>
    )

    const errroMessage = () => (
        <div className="alert alert-danger mt-3">
            <h4> Some Error Occured, Plese try again.. </h4>
        </div>
    )
    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group mb-2">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group mb-2">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group mb-2">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group mb-2">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {
                  categories.map((category,index)=>(
                     <option key={index} value={category._id}> {category.name} </option> 
                  ))
              }
            </select>
          </div>
          <div className="form-group mb-2">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} 
          className="btn btn-outline-success mb-2">
            Update Product
          </button>
        </form>
      );
    

    return (
       <Base 
       title="Update Products"
       description="Got Something wrong? No worries.. Update them here"
       className="container bg-info p-3"
       >
           <Link className="btn btn-md btn-dark mb-3" to="/admin/dashboard"> Admin Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {
                        success && successMessage()
                    }
                    {
                        error && errroMessage()
                    }
                   {createProductForm()}
                </div>
            </div>
        
       </Base>
    )
}

export default AddProduct
