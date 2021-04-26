import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { deleteCategory, getAllCategories } from './helper/adminapicall'



const ManageCategories = () => {

    const {user,token} = isAuthenticated()

    const [categories,setCategories] = useState([])

    const preload = () => {
        getAllCategories()
        .then(data => {
            if(data.error){
                console.log(data.error);
            }
            console.log(data.categories);
            setCategories(data.categories)
        })
    }

    const deleteCategoryHandler = (categoryId) => {
        deleteCategory(categoryId,user.id,token)
        .then(data=>{
            console.log(data);
            preload()
        })
        .catch((e)=>{
            console.log(e);
        })

    }

    useEffect(() => {
       preload()
    }, [])


    return (
    <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All Categories:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total Categories</h2>

        {
            categories.map((category,index)=>{
                return (
                    <>

                        <div key={index} className="row text-center mb-2 ">
                            <div className="col-4">
                                <h3 className="text-white text-left"> {category.name} </h3>
                            </div>

                            <div className="col-4">
                                <Link
                                    className="btn btn-success"
                                    to={`/admin/category/update/${category._id}`}
                                >
                                    <span className="">Update</span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {deleteCategoryHandler(category._id)}} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                        

                    </>
                    
                )
            })
        }
        </div>
      </div>
    </Base>
    )
}


export default ManageCategories
