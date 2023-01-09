import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./Footer"

function SellerProfile(){
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
        <><div className="container float-right">
            <div className="card shadow m-5 p-3  text-black text-center " style={{ backgroundColor: '#99ccff', width: '700px', boxShadow: '5px solid black' }}>
                <h4 className="p-3" style={{ border: "2px solid green", width: "300px", margin: "auto", backgroundColor: '#3399ff' }}>Seller Profile Page</h4>
                <br />
                <h4>Welcome {user.name}</h4>
                <h5>City : {user.city}</h5>
                
                <h5>Contact No : {user.phone}</h5>
            </div>
        </div><Footer /></>
    )
}

export default SellerProfile;
