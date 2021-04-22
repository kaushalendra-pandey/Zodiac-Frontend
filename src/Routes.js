import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from "./user/Signin"
import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoutes from "./auth/helper/PrivateRoutes"
import Profile from "./user/Profile"
import UserDashBoard from "./user/UserDashBoard"
import AdminDashBoard from "./user/AdminDashBoard"
import AddCategory from "./admin/AddCategory"


export default function Routes() {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path="/signin" exact component={Signin}/>
            <PrivateRoutes path="/user/profile" exact component={Profile}/>
            <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard}/>
            <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard}/>
            <AdminRoutes path="/admin/create/category" exact component={AddCategory}/>
        </Switch>

       </BrowserRouter>
    )
}
