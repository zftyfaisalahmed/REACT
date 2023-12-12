import omit from "lodash";
import { useState } from "react";
import { toast } from 'react-toastify';



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

    // Error Print
    // errPrint("name", "Test case")

    // validate function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled")
                } else if (value.length < 3) {
                    errPrint(name, "Name atleast have 3 letters")
                } else if (!new RegExp(/^[a-zA-Z\s]+$/).test(value)) {
                    errPrint(name, "Invalid Name")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
                break;
        
            case "email": 
                if (value.length === 0) {
                    errPrint(name, "Eamil field must be filled");
                } else if (!new RegExp(/^[a-zA-Z0-9\S]+@[a-zA-z\S]+.[a-zA-Z\S]+$/).test(value)) {
                    errPrint(name, "Invalid Eamil")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
                break;

            case "image" : 
                if (value.length === 0) {
                    errPrint(name, "Image field must be filled");
                } else if (!new RegExp(/^\S+$/).test(value)) {
                    errPrint(name, "Invalid Image")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
                break;

            case "mobile" : 
                if (value.length === 0) {
                    errPrint(name, "Mobile field must be filled");
                } else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                    errPrint(name, "Invalid Number")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
                break;

            case "address" : 
                if (value.length === 0) {
                    errPrint(name, "Address field must be filled");
                } else if (!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)) {
                    errPrint(name, "Invalid Address")
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb)
                }
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
        // console.log("New Contact = ", contact)
        if (Object.keys(errors).length === 0 && Object.keys(contact).length !== 0) {
            console.log("new",contact)
        } else {
            toast.error("Some Errors are in form or feilds are empty.")
        }
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