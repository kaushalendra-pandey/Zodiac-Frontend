import React from 'react'
import Base from '../core/Base'
import {isAuthenticated} from "../auth/helper/index"
import { Link } from 'react-router-dom'

const AdminDashBoard = () => {

    const adminLeftSide = () => {
        return (
            <div className="card">
                <h3 className="card-header bg-dark text-white">Admin Navigation</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success">Create Category </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-success">Manage Category </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-success">Create Product </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-success">Manage Products </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-success">Manage Order </Link>
                    </li>

                </ul>
            </div>
        )
    }

    const adminRightSide = () => {
        return (
        <div className="card mb-4">
            <h4 className="class-header">Admin Info</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge bg-success">Name</span>
                      &nbsp;&nbsp;{name}
                </li>
                <li className="list-group-item">
                    <span className="badge bg-success">Email</span>
                      &nbsp;&nbsp;{email}
                </li>
                <li className="list-group-item">
                    <span className="badge bg-danger">Admin Area</span>
                </li>
            </ul>
        </div>
        )
    }

    const {user:{name,email,role}} = isAuthenticated()

    return (
        <Base title="Welcome to Admin Area"
         description="Mangae all your products and orders here..."
         className="container bg-success p-2"
         >
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
            
        </Base>
    )
}

export default AdminDashBoard
