import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { ImConfused } from "react-icons/im";
import {RiLockPasswordFill} from "react-icons/ri";
import loginvalidation from "../loginvalidation"
import Footer from "./Footer";
import emailjs from 'emailjs-com'


function ForgotPassword(){

    const dispatch=useDispatch()

    const [user,setUser]=useState("")
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

   

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(e.target.value)
        emailjs.sendForm('service_ur26ius', 'template_qvmvlme', e.target, '7UXw0uABxZOM2Qho2')
        alert("Email Sent Successfully!")
    }
   const handleInput=e=>{
    console.log(e.target.value);
    setUser(e.target.value)
    console.log(user);
   }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/customers/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
               
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Invalid username or password")
            })            
        }
    },[errors])

    
        return (
            <>
    
    <div className="container1">
    <div className="form-box1">
        <div className="header-form1">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}><ImConfused/></i></h4>
            <h4 className="text-primary text-center">Forgot Password</h4>
           
            <div className="image">
            </div>
        </div>
        <div className="body-form">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-user"><ImUserTie/></i></span>
                    </div>
                    <input type="email" name="mail" placeholder="Enter your Email"  onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                     
                </div>
               
                <button type="submit"  value ="send" className=" form-control btn btn-secondary btn-block">Send Reset Mail</button>
     
            </form>
            
        </div>
    </div>
    </div>
    <Footer/></>
        );
    }
    
export default ForgotPassword;

