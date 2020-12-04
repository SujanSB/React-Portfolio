import React from 'react'
import {NavLink,Link} from 'react-router-dom'
function MainNav() {
    return (
       
            <div class="Topnavbar">
                <div class="brand">
                    <NavLink  exact to="/" > InvalidSB</NavLink>

                       
                </div>
                    <Link class="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    </Link>
                <div class="Topmenu">
                    <NavLink  exact to="/Blog" >Blogs</NavLink>
                    <NavLink exact to="/Contact" >Contact</NavLink>
                </div>
            </div>

        
    )
}

export default MainNav
