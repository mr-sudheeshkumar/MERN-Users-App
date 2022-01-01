import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export const Navbar = () =>{
    const {loginstat} = useContext(UserContext);
    const[loginstatus] = loginstat;
    return(
        <>
            <div className="navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand navtitle" href="#">User App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/login">{loginstatus?"Logout":"Login"}</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/searchuser">Search User</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/updateuser">Edit Details</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/deleteuser">Delete User</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}