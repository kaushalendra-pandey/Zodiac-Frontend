import React,{useState} from 'react'
import Base from '../core/Base'
import {Link } from "react-router-dom"
import { signup } from '../auth/helper'

const Signup = () => {


    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })
    const {name,email,password,error,success} = values

    const handleChange = name => e => {
        setValues({
            ...values,
            error:false,
            [name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }else{
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success:true
                })
            }
        })
        .catch(console.log("Error in signup"))

    }

    const successMethod = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                        New Account Created Successfully. <Link to="signin"> Click to Login </Link>
                    </div>
                </div>
            </div>
        )

    }

    const errorMethod = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                    {error}
                    </div>
                </div>
            </div>
        )

    }

    const signUpForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input value={name} onChange={handleChange("name")} className="form-control" type="text"/>
                        </div>

                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input value={email} onChange={handleChange("email")} className="form-control" type="email"/>
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input value={password} onChange={handleChange("password")} className="form-control" type="password"/>
                        </div>

                        <div className="d-grid gap-2 mt-4">
                            <button onClick={onSubmit} className="btn btn-success">
                                Signup
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title="Signup" description="A page for user to signup!">
                {successMethod()}
                {errorMethod()}
               {signUpForm()}
            </Base>
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </div>
    )
}

export default Signup
