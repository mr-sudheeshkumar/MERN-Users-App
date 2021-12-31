import { useContext } from "react";
import {UserContext} from "../UserContext";
export const Home = ()=>{
    const {loginstat,usrname} = useContext(UserContext);
    const [loginstatus] = loginstat;
    const [username] = usrname;
    return(
        <>
            <h1 className="welcome-body">Welcome to HomePage{loginstatus?<div>{username}</div>:<div className="homepage-login"><p className="exist-user">Existing User?<a href="/login" className="login-link">Login</a></p></div>}</h1>
        </>
    )
}