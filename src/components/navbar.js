import React from "react";
import './navbar.css'

export default function NavBar(){
    return(
        <nav>
            <span className="navTitle" >React Kanban</span>
            <ul>
                <li>home</li>
                <li>kanban</li>
                <li>contact</li>
            </ul>
        </nav>
    );
}