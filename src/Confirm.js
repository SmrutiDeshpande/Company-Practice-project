import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";
 
function Confirm()
{
   const [confirmpassword, setConfirmPassword] = useState("");
   const [password, setPassword] = useState("");
   
   let history=useHistory();

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(password==confirmpassword)
     
    try{
        if(password==confirmpassword){
         await axios.post("http://localhost:8010/forgetpassword",
        {
      
        confirmpassword: confirmpassword,
        password : password
        
        });
          alert("Password Changed Successfully");
      
         
          setPassword("");
          setConfirmPassword("");
         
    } 
    else{
        alert("Passwords did not match");
    }
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
            <h1>Password Reset</h1>
            {/* <p>Fill in the Information Below</p> */}
 
            <input type="text"
            name="password"
            placeholder="New Password"
            required
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />


            <input type="text"
            name="confirmpassword"
            placeholder="Confirm New Password"
            required
            onChange={(event) =>
                {
                    setConfirmPassword(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Register</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default Confirm;