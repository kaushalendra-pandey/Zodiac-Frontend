import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import { createCategory } from '../admin/helper/adminapicall'
import Base from '../core/Base'



const AddCategory = () => {

    const [name,setName] = useState("")
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')

    const {user,token} = isAuthenticated()
   

    const submitHandler = (e) => {
        e.preventDefault()
        createCategory(user.id,token,{name})
        .then(data => {
            console.log(data);
            if(data.error){
                setError(data.error)
            }else{
                setError("")
                setSuccess("New Category Created...")
            }
            setName("")
        })
        .catch((err)=>{
            setError(true)
            console.log(err);
        })
    }

    const changeHandler = (e) => {

        setName(e.target.value)

    }

      
            
    const myCategoryForm = () => (

        <form >
            <div className="form-group">
                <p className="lead"> Enter the category</p>
                <input type="text"
                onChange = {(e)=>changeHandler(e)}
                className="form-control my-3"
                autoFocus
                required
                value={name}
                placeholder="For Ex. Summer "
                />
                <button onClick={submitHandler}className="btn btn-outline-info mb-2"> Create </button>
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
                        <p className="bg-success text-center mt-3"> {success} </p>
                        
                       )
                   }
                   {
                       error && (
                           <p className="bg-danger text-center mt-3">
                               {error}
                           </p>
                       )
                   }
                    {myCategoryForm()}
                    {goBack()}
               </div>
           </div>
           <p>{name}</p>
       </Base>
    )
}

export default AddCategory
