import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import {useNavigate} from 'react-router';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
export const Login =() =>{
    let navigate = useNavigate();
    const loginbtnclicked = () =>{
        axios.post("/api/login",user).then((res)=> res.data.data === "failed"? wrongcredentials() :(setusername(String(res.data.data).toUpperCase()),setloginstatus(true),navigate("/")));
    }
    const {loginstat, usrname} = useContext(UserContext);
    const [loginstatus,setloginstatus] = loginstat;
    const [username,setusername] = usrname;
    const [msg, setmsg] = useState("");
    const user={
        username:"",
        password:"",
    }
    const wrongcredentials =() =>{
        setmsg("Incorrect Credentials Please try again.");
    }
    
    return(
        <>
            {loginstatus?<Logout />:(<div className="page-body">
                <div className="top-space"></div>
                <div>
                    <h1 className="page-title">LOGIN PAGE</h1>
                </div>
                <div className="body-form">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" onChange={(e) => (user.username = e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => (user.password = e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-outline-dark" onClick={loginbtnclicked}>Login</button>
                        <p className="login-warning">{msg}</p>
                        <p>Don't have an account ?<Link to = "/" className="register-link">REGISTER</Link></p>
                    </form>
                </div>
            </div>)}
        </>
    )
}