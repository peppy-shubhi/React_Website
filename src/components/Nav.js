import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'

const Nav=(props)=>{
    setTimeout(()=>
    {        props.history.push('/about')
    },2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a  className="brand-logo">Happy-Page</a>
                <ul className="right">
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/about">About</NavLink> </li>
                    <li> <NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </div>


            
        </nav>
    )
}
export default withRouter(Nav)