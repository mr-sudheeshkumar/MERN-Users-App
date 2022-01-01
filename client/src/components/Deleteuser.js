import { useContext,useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Deleteuser = () =>{
    const {loginstat,usrid} = useContext(UserContext);
    const[loginstatus] = loginstat;
    const[userid] = usrid;
    const [msg, setmsg] = useState();
    const ondeletebtnclick = () =>{
        axios.post("/api/deleteuser",user).then((res) => res.data.data === "success"?delsuccess():delfailed());
    };
    const user={
        username:userid,
    }
    const delsuccess = () =>{
        setmsg("Your account is deleted successfully. Once you logout you will have to re-register to login.")
    }
    const delfailed = () =>[
        setmsg("Delete operation failed : Your account doesn't exist.")
    ]
    return(
        <>
            <div className="page-body">
                <div className="top-space"></div>
                <div>
                    <h1 className="page-title">Delete your account</h1>
                </div>
                <div className="body-form">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" value={userid} disabled/>
                        </div>
                        <button type="button" className="btn btn-outline-dark" onClick={ondeletebtnclick}>Delete this account</button>
                        <p className="login-warning">{msg}</p>
                        <p>Not {userid} ?<Link to = "/login" className="register-link">LOGOUT</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};