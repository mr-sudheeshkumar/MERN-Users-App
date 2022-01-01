import { useContext,useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Updateuser = () =>{
    const{loginstat,usrid} = useContext(UserContext);
    const[loginstatus] = loginstat;
    const[userid] = usrid;
    const [msg, setmsg] = useState();
    const [pass, setpass] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
    const updatebtnclick = () =>{
        axios.post("/api/updateuser", user).then((res) => res.data.data === "success"?updatesuccess():updatefailed());
    }
    const user={
        username:userid,
        password:pass,
        name:name,
        age:age,
    }
    const updatesuccess =() =>{
        setmsg("Your Details was updated successfully.");
    }
    const updatefailed = () =>{
        setmsg("Failed to update your data.");
    }
    return(
        <>
            {loginstatus?(<div className="page-body">
                <div className="top-space"></div>
                <div>
                    <h1 className="page-title">EDIT YOUR DETAILS</h1>
                </div>
                <div className="body-form">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" value={userid} disabled/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => (setpass(e.target.value))} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(e) =>(setname(e.target.value))}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Age</label>
                            <input type="text" className="form-control" onChange={(e) =>(setage(e.target.value))}/>
                        </div>
                        <button type="button" className="btn btn-outline-dark" onClick={updatebtnclick}>Save</button>
                        <p className="login-warning">{msg}</p>
                        <p>Not {userid} ?<Link to = "/login" className="register-link">LOGOUT</Link></p>
                    </form>
                </div>
            </div>):(<></>)}
        </>
    );
};