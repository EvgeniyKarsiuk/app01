import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>

                <NavLink to="/profile" className={s.focus}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={s.focus}>
                    Messages
                </NavLink>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;
