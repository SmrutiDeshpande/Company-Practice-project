import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";
 
function Register()
{
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   
   let history=useHistory();

    async function handleSubmit(event)
    {
        event.preventDefault();
     
    try{
        
         await axios.post("http://localhost:8010/register",
        {
      
        email: email,
        name : name,
        password : password,
        
        });
          alert("User Registation Successfully");
          setEmail("");
          setName("");
          setPassword("");
          history.push("/loginpage");
    } 
    catch(err)
        {
          alert("User Registation Failed");
          alert(err);
        }
   }
    return (
        <div className="register-container">
            
            <Header />
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 
            <input type="email"
             name="email"
             placeholder="Enter Your Email"
             required
                    
             onChange={(event) =>
              {  
                  setEmail(event.target.value);      
              }}


            />

        <input type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            onChange={(event) =>
                {
                    setName(event.target.value);      
                }}          
        />


        <input type="text"
            name="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
        />
 
    
 
            <button type="submit">Register</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default Register;