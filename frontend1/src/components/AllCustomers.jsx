import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function AllCustomers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    
    return (
        <><div className="container-fluid bg-white">
            <h4 className="text-white p-2 text-center" style={{ background: 'linear-gradient(to bottom right, #009999 19%, #ff6666 100%)' }}>All Customers</h4>
            <table className="table table-bordered table-light table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>User Id</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(x => (
                        <tr key={x.id}>
                            <td>{x.name}</td>
                            <td>{x.city}</td>
                            <td>{x.gender}</td>
                            <td>{x.phone}</td>
                            <td>{x.userid}</td>
                            <td>{x.pwd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div><Footer /></>
    )
}

export default AllCustomers;