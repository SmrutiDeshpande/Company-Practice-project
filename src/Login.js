import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";


 
function Login()
{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


 
   async function handleSubmit(event)
    {
        event.preventDefault();
    
        
         await axios.post("http://localhost:8010/login",
        {
      
        email: email,
        password : password,
        
        });
          alert("User Login Successfully");
          setEmail("");
          
          setPassword("");
        
    // catch(err)
    //     {
    //       alert("User Registation Failed");
    //       alert(err);
    //     }
   }
    return (
        <div className="register-container">
              <Header />
            
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Login</h1>
            <p>Fill in the Information Below</p>
 
            <input type="email"
             name="email"
             placeholder="Your Email"
                    
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />


 
            
            {/* <input type="text"
            name="name"
            placeholder="name"
            onChange={(event) =>
                {
                    setName(event.target.value);      
                }}          
            /> */}
        <input type="text"
            name="password"
            placeholder=" Your Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Login</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default Login;