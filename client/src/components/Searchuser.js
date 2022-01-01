import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useState } from "react";
import axios from "axios";
export const Searchuser = () =>{
    const {loginstat} = useContext(UserContext);
    const[loginstatus] = loginstat;
    const [msg, setmsg] = useState();
    const [srchresusername, setsrchresusername] = useState(false);
    const [srchresname, setsrchresname] = useState();
    const [srchresage, setsrchresage] = useState();
    const user={
        username:"",
    };
    const searchbtnclicked = () =>{
        axios.post("/api/searchuser",user).then((res)=> res.data.data === "not found"?nouserfound():userfound(res));
    };
    const nouserfound = () =>{
        setmsg("No such user found.");
        setsrchresusername(false);
    }
    const userfound = (res) =>{
        setmsg("");
        setsrchresusername(res.data.data.username.toString());
        setsrchresname(res.data.data.name.toString());
        setsrchresage(res.data.data.age.toString());
    }
    useEffect( () =>{
        if(msg === "No such user found."){
            setsrchresusername(false);
            setsrchresname("");
            setsrchresage("");
        }
    },[msg]);
    return(
        <>
            {loginstatus?(<div className="page-body">
                <div className="top-space"></div>
                <div>
                    <h1 className="page-title">SEARCH USER</h1>
                </div>
                <div className="body-form">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Enter Username to Search</label>
                            <input type="text" className="form-control" onChange={(e) => (user.username = e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-dark" onClick={searchbtnclicked}>Search</button>
                        <p className="login-warning">{msg}</p>
                        {srchresusername && <div>
                            <p>Search Result</p>
                            <p>Username : {srchresusername}</p>
                            <p>Name : {srchresname}</p>
                            <p>Age : {srchresage}</p>
                        </div>}
                    </form>
                </div>
            </div>):(<></>)}
        </>
    );
}