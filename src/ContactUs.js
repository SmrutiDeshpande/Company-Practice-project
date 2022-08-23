import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";


 
function ContactUs()
{
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");


 
   async function handleSubmit(event)
    {
        event.preventDefault();
    
        
         await axios.post("http://localhost:8010/contactus",
        {
        name: name,
        phone:phone,
        email: email,
        message : message,
        
        });
          alert("Message Submitted Successfully");
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        
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

            <input type="text"
             name="name"
             placeholder="Your Name"
             min="1"
            required        
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />

            <input type="text"
             name="Phone"
             placeholder="Your Phone Number"
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required      
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />
 
            <input type="email"
             name="email"
             placeholder="Your Email"
              required      
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />


 
            
           
        <input type="text"
            name="message"
            placeholder="Your Message"
            required
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Submit</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default ContactUs;