import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router";
export const Logout = () =>{
    let navigate=useNavigate();
    const {usrname} = useContext(UserContext);
    const [username] = usrname;
    return (
        <>
            <div className="logout-body">
                <p className="logout-info">You are logged in as {username}.</p>
                <p className="logout-info notuser">Not {username} ? <a className="btn btn-outline-danger btn-logout" href = "./">LOG OUT</a></p>
            </div>
        </>
    );
}