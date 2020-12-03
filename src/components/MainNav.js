import React from 'react'
import {NavLink} from 'react-router-dom'
function MainNav() {
    return (
        // <div>
        //     <NavLink  exact to="/" >Home</NavLink>
        //     <NavLink  exact to="/Blog" >Blogs</NavLink>
        //     <NavLink exact to="/Contact" >Contact</NavLink>
        // </div>
            <div class="Topnavbar">
                <div class="brand">
                    <NavLink  exact to="/" > InvalidSB</NavLink>

                       
                </div>
                    <a class="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    </a>
                <div class="Topmenu">
                    {/* <NavLink  exact to="/" >Home</NavLink> */}
                    <NavLink  exact to="/Blog" >Blogs</NavLink>
                    <NavLink exact to="/Contact" >Contact</NavLink>
                </div>
            </div>

        
    )
}

export default MainNav
