import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import { ImUserTie } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import Footer from "./Footer";

import { AiOutlineEye } from "react-icons/ai";

function SellerLogin(){
    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()
     const [showPassword, setShowPassword] = useState(false);


    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

     const handlePassword=e=>{
        e.preventDefault()
        setShowPassword(!showPassword);
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user)) 
        setSubmitted(true)   
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:8080/api/sellers/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("userid",result.userid)
                sessionStorage.setItem("uname",result.name)
                sessionStorage.setItem("role","seller")
                sessionStorage.setItem("id",result.id)
                dispatch({type:'IsLoggedIn'})
                history.push("/sprofile")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Invalid username or password")
            })            
        }
    },[errors])


    return (
       <><div className="container1">
                <div className="form-box1">
                    <div className="header-form1">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}><FaUserCircle/></i></h4>
                        <h4 className="text-primary text-center">Seller Login</h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"><ImUserTie/></i></span>
                                </div>
                                <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                                        {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                                 
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"><RiLockPasswordFill/></i></span>
                                </div>
                                <input type={showPassword ? "text" : "password"} name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                                        {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                           <button  onClick={handlePassword} ><AiOutlineEye/></button>
                            </div>
                            <button type="button1" onClick={handleSubmit} className="btn btn-secondary btn-block">LOGIN</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="/regsupplier">Don't have an acoount?</a></div>
                            </div>
                            <div className="float-right"><a href="/forgotPasswordS">Forgot Password?</a></div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/></>
    );
}

export default SellerLogin;