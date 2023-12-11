import React from "react";
import { useState } from "react";

function UserForm() {
    const [contact, setContact] = useState({
        name : "",
        email : "",
        image : "",
        mobile : "",
        address : ""
    });
    const [errors, setErrors] = useState({});

    // Error Priinting
    const errPrint = (prop, msg) => {
        setErrors({...errors, [prop]: msg});
    }

    // validate function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled")
                } /* else {

                } */
                break;
        
            default:

                break;
        }
    }
    

    const readValue = (e) => {
        const {name, value} = e.target;
        validate(e, name, value)
        setContact({...contact, [name] : value})
    }

    const submitHandler = (e) => {
        e.preventDefault(); //avoid page refresh
        console.log("New Contact = ", contact)
    }
    return {
        contact,
        errors,
        readValue,
        submitHandler,
        setContact
        // validate
    };

}

export default UserForm;