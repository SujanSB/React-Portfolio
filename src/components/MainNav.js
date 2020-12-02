import React from 'react'
import {NavLink} from 'react-router-dom'
function MainNav() {
    return (
        <div>
            <NavLink  exact to="/" >Home</NavLink>
            <NavLink  exact to="/Blog" >Blogs</NavLink>
            <NavLink exact to="/Contact" >Contact</NavLink>
        </div>
    )
}

export default MainNav
