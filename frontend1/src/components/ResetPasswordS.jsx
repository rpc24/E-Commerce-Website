import axios from "axios"
import { useEffect, useState } from "react"
import uservalidation from "../uservalidation"
import Footer from "./Footer"
import { AiOutlineEye } from "react-icons/ai";

import { useHistory } from "react-router-dom"


function ResetPasswordS()
{
    const [user,setUser]=useState({
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "cpwd":"",
        "phone":""
    })
    const history=useHistory()
    const [showPassword, setShowPassword] = useState(false);
    


    const handleInput=(e)=>{
        e.preventDefault()
        console.log(e.target.value +"sdcsc");
        let user1 = e.target.value;
        axios.get("http://localhost:8080/api/sellers/get/"+user1)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    }

    const handleInputs=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user.id)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.pwd && user.cpwd && user.pwd!==user.cpwd){
            alert("Password not match")
        }
        else{
        
        console.log(user.id)
        axios.put("http://localhost:8080/api/sellers/"+user.id,user)
        .then(resp=>{
            alert("Profile updated successfully")
            history.push("/slogin")
       
        })     }
    }

    const handlePassword=e=>{
        e.preventDefault()
        setShowPassword(!showPassword);
    }
    return (
        <><div className="container">
            <div className="card shadow  mt-3 text-black" style={{ opacity: '70%' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <h4 className="text-center p-2" style={{ background: 'linear-gradient(to top right, #33ccff 0%, #ff99cc 100%)', opacity: '100%' }}>
                                Seller Reset Password
                            </h4>
                            <form onSubmit={handleSubmit} >
                               
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">User Id</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="userid"  value={user.userid} onChange={handleInput} className="form-control" />
                                         </div>

                                </div>
                                
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"> New Password</label>
                                    <div className="col-sm-8">
                                        <input type={showPassword ? "text" : "password"} name="pwd" value={user.pwd} onChange={handleInputs} className="form-control" />
                                        <button  onClick={handlePassword} className="float-right" ><AiOutlineEye/></button>
                                        
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Confirm Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" name="cpwd" value={user.cpwd} onChange={handleInputs} className="form-control" />
                                       

                                    </div>
                                </div>
                                <button className="btn btn-primary float-right">Reset Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <Footer /></>
      )
}
export default ResetPasswordS;