import './App.css';
import axios from "axios";
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {Register} from "./components/Register";
import { Searchuser } from './components/Searchuser';
import {Updateuser} from "./components/Updateuser"; 
import {UserContext} from "./UserContext";
import { Deleteuser } from './components/Deleteuser';


function App() {
  const[loginstatus,setloginstatus] = useState(false);
  const[username, setusername] = useState('');
  const[userid,setuserid] = useState();
  return (
    <>
      <UserContext.Provider value={{loginstat : [loginstatus,setloginstatus],usrname : [username,setusername],usrid : [userid,setuserid]}}>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element = {<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/searchuser" element={<Searchuser />}></Route>
            <Route exact path="/updateuser" element={<Updateuser />}></Route>
            <Route exact path="/deleteuser" element={<Deleteuser />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
