import React from 'react'
import Menu from "./Menu"

const Base = ({
    title="Variable Title",
    description="Variable description",
    className="bg-dark text-white p-4",
    children
}) => (
    <div>
        <Menu/>
        <div className="container-fluid">
               <div className="jumbotron bg-dark text-white text-center">
                   <h2 className="display-4"> {title} </h2>
                   <p className="lead"> {description} </p>
               </div>
           </div>
           <div className={className}> {children}</div>
           <footer className="footer bg-dark mt-auto py-3">
               <div className="container-fluid bg-success text-white text-center py-1">
                    <h4> If you got any question..feel free to reach out</h4>
                    <button className="btn btn-warning">Contact us</button>
               </div>
               <div className="container text-center">
                   <span className="text-muted">
                       A geeky tshirt store!!
                   </span>
               </div>
           </footer>
    </div>
)

export default Base
