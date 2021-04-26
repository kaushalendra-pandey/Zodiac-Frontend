import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import {getCategory,updateCategory } from '../admin/helper/adminapicall'
import Base from '../core/Base'



const AddCategory = () => {

    const categoryId = useParams().categoryId
    const [name,setName] = useState("")
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')

    const {user,token} = isAuthenticated()
   

    const submitHandler = (e) => {
        e.preventDefault()
        updateCategory(categoryId,user.id,token,{name})
        .then(data => {
            if(data.error){
                setError(data.error)
            }else{
                setError("")
                setSuccess("Category updated...")
            }
            preloadCategory()
        })
        .catch((err)=>{
            setError(true)
            console.log(err);
        })
    }

    const changeHandler = (e) => {

        setName(e.target.value)

    }

    const preloadCategory = () => {
        getCategory(categoryId)
        .then(data=>{
            if(data.error){
                console.log(error);
            }else{
                setName(data.name)
            }
        })
    }

    useEffect(() => {
       preloadCategory()
    }, [])
            
    const myCategoryForm = () => (

        <form >
            <div className="form-group">
                <p className="lead"> Category Name </p>
                <input type="text"
                onChange = {(e)=>changeHandler(e)}
                className="form-control my-3"
                autoFocus
                required
                value={name}
                />
                <button onClick={submitHandler}className="btn btn-outline-info mb-2"> Update </button>
            </div>
        </form>
    )

    const goBack = () => (
        <div className = "mt-5">
            <Link className="btn btn-info btn-sm mb-3" to="/admin/dashboard"> Admin Home </Link>
        </div>
    )
    

    return (
       <Base 
       title="Create a new Category"
       description="Add your new category here"
       className="container bg-info p-4"
       >
           <div className="row bg-white rounded">
               <div className="col-md-8 offset-md-2">
                   {
                       success && (
                        <p className="alert alert-success text-center mt-3"> {success} </p>
                        
                       )
                   }
                   {
                       error && (
                           <p className="alert alert-danger text-center mt-3">
                               {error}
                           </p>
                       )
                   }
                    {myCategoryForm()}
                    {goBack()}
               </div>
           </div>
       </Base>
    )
}

export default AddCategory
