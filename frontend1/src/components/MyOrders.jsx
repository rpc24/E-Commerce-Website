import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";
import Footer from "./Footer";

function MyOrders(){
    const [orders,setOrders]=useState([])
    const [show,setShow]=useState(false)
    const [details,setDetails]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/orders?custid="+sessionStorage.getItem("id"))
        .then(resp=>{
            console.log(resp.data)
            setOrders(resp.data.data)
        })
    },[]);

    const showDetails=(orderid)=>{
        axios.get("http://localhost:8080/api/orders/"+orderid)
        .then(resp=>{
            console.log(resp.data)
            setDetails(resp.data.data.details)
        })
        setShow(true)
    }
    
    return (
        <><div className="container-fluid ">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="p-2 text-center text-white" style={{ background: 'linear-gradient(to bottom right, #009999 19%, #ff6666 100%)' }}>My Purchased Orders</h4>
                    <table className="table table-bordered table-sm table-light table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Order Date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(x => (
                                <tr key={x.orderid}>
                                    <td>{x.orderid}</td>
                                    <td><Moment format="ddd, DD-MMM-YYYY">{x.orderDate}</Moment></td>
                                    <td>&#8377; {x.payment.amount}</td>
                                    <td><button onClick={e => showDetails(x.orderid)} className="btn btn-primary btn-sm">Show Details</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-5">
                    {show ? <>
                        <h4 className="p-2 text-white text-center" style={{ background: 'linear-gradient(to bottom right, #009999 19%, #ff6666 100%)' }}>Order Details</h4>
                        <table className="table table-bordered table-sm table-light table-striped table-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.map(x => (
                                    <tr>
                                        <td>{x.product.prodid}</td>
                                        <td><img className="mr-2 float-left" src={"http://localhost:8080/" + x.product.photo} width="100" />
                                            {x.product.pname}<br />
                                            Category: {x.product.pcat}<br />
                                            Brand: {x.product.brand}<br />
                                        </td>
                                        <td>{x.product.price}</td>
                                        <td>{x.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </> : ''}
                </div>
            </div>

        </div><Footer /></>
    )
}
export default MyOrders;