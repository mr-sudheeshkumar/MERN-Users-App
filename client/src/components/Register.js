import { Link } from "react-router-dom";
import { useState } from "react";
import axios, { Axios } from "axios";
export const Register = () =>{
    const user ={
        username:"",
        password:"",
        name:"",
        age:0,
    };
    const [msg, setmsg] = useState();
    const registerbtnclick = () =>{
        axios.post("/api/registration",user).then((res) => setmsg(res.data.data));
    }
    return (
        <>
            <div className="page-body">
                <div className="top-space"></div>
                <div>
                    <h1 className="page-title">REGISTER USER</h1>
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
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(e) =>(user.name = e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Age</label>
                            <input type="text" className="form-control" onChange={(e) =>(user.age = e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-dark" onClick={registerbtnclick}>Register</button>
                        <p className="login-warning">{msg}</p>
                        <p>Already have an account ?<Link to = "/login" className="register-link">LOGIN</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}