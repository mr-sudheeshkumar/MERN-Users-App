import './App.css';
import axios from "axios";
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {UserContext} from "./UserContext";


function App() {
  const fetchUsers = () =>{
    axios.get("/api/list").then((res) => res.data.data.map((element) => (
      <p>{element.name}</p>
    )));
  };
  
  const[loginstatus,setloginstatus] = useState(false);
  const [username, setusername] = useState('');

  const user={
    username:"",
    password:"",
    name:"",
    age:0,
  };

  const registerUser = () =>{
    axios.post("/api/registration",user).then((res) => setlblmsg(res.data.data));
  };

  const userLogin =()  =>{
    
  }

  
  const [lblmsg, setlblmsg] = useState('');

  return (
    <>
      <UserContext.Provider value={{loginstat : [loginstatus,setloginstatus],usrname : [username,setusername]}}>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element = {<Login />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
