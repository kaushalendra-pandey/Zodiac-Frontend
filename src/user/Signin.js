import React,{useState} from 'react'
import Base from '../core/Base'
import {Link, Redirect } from "react-router-dom"
import { authenticate, isAuthenticated, signin } from '../auth/helper'

const Signin = () => {

    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect} = values

    const {user} = isAuthenticated()
    console.log(user);

    const loadingMethod = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2> Loading... </h2>
                </div>
            )
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


    const handleChange = name => e => {
        setValues({
            ...values,
            [name]:e.target.value,
            error:false
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        signin(values)
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect:true
                    })
                })
            }
        })
        .catch((e)=>{
            console.log("error in signin");
        })
    }

    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role===1){
                return <Redirect to="/admin/dashboard"/>
            }else{
                return <Redirect to="/user/dashboard"/>
            }
        }
        if(isAuthenticated()){
            <Redirect to="/" />
        }
    }
    
    const signInForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                    
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
                                Signin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title="Signin" description="A page for user to signin!">
                {loadingMethod()}
                {errorMethod()}
                {signInForm()}
                {performRedirect()}
                <p className="text-white text-center">{JSON.stringify(values)}</p>
            </Base>
        </div>
    )
}



export default Signin
