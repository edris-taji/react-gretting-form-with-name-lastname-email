import React , { useState } from "react";
import './Styles.css';


function App (props){
    const [contact, setContact] = useState({
        fname : "",
        lname :"",
        email: ""
    });
    function handleChange (event) {
        const newValue = event.target.value;
        const inputName = event.target.name;
        setContact(prevValue => {
            if (inputName === "fname") {
                return {
                    fname: newValue,
                    lname: prevValue.lname,
                    email: prevValue.email
                }
            } else if (inputName === "lname") {
                return {
                    fname: prevValue.fname,
                    lname: newValue,
                    email: prevValue.email
                } 
            } else if (inputName === "email") {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.fname,
                    email: newValue
                } 
            }
        });
    }
    
    return (
        <div className="container">
           <form className="form">
                <h1>Hello {contact.fname} {contact.lname} </h1>
                <p>{contact.email}</p>
                <input
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={contact.fname}
                />
                <input
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    value={contact.lname}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit" className="btn">
                    {props.isRegitered ? "Login" : "Register"}
                </button>
            </form>
        </div>
    )
}

export default App;