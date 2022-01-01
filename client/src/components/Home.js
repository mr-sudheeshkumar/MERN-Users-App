import { useContext } from "react";
import {UserContext} from "../UserContext";
import { Link } from "react-router-dom";
export const Home = ()=>{
    const {loginstat,usrname} = useContext(UserContext);
    const [loginstatus] = loginstat;
    const [username] = usrname;
    return(
        <>
            <h1 className="welcome-body">Welcome to HomePage{loginstatus?<div>{username}</div>:<div className="homepage-login"><p className="exist-user">Existing User?<Link to="/login" className="login-link">Login</Link></p></div>}</h1>
        </>
    )
}