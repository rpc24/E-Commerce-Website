import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function MyProducts(){
    const sellerid=sessionStorage.getItem("id");
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products?sellerid="+sellerid)
        .then(resp=>{
            console.log(resp.data)
            setProducts(resp.data.data)
            console.log(products)
        })
    },[])

    const deleteProduct = (prodid)=>{
        let resp=window.confirm('Are you sure to delete this product ?');
        if(resp){
            axios.delete("http://localhost:8080/api/products/"+prodid)
            .then(resp=>{
                alert("Product deleted successfully")
                axios.get("http://localhost:8080/api/products?sellerid="+sellerid)
                .then(resp=>{
                    console.log(resp.data)
                    setProducts(resp.data.data)
                    console.log(products)
                })
            })            
        }
    }
    
    return (
        <><div className="container-fluid text-white">
            <div className="card shadow  text-black">
                <div className="card-body">
                    <h4 className="text-black p-2 text-center" style={{ background: 'linear-gradient(to bottom right, #009999 19%, #ff6666 100%)' }}>My Products</h4>
                    <table className="table table-bordered table-light table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(x => (
                                <tr key={x.prodid}>
                                    <td><img width="100" src={"http://localhost:8080/" + x.photo} className="img-thumnail" />{x.pname}</td>
                                    <td>{x.pcat}</td>
                                    <td>{x.brand}</td>
                                    <td>{x.price}</td>
                                    <td>
                                        <Link to={"/edit/" + x.prodid} className="btn btn-primary btn-sm mr-2">Edit</Link>
                                        <button onClick={() => deleteProduct(x.prodid)} className="btn btn-danger btn-sm">Delete</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div><Footer /></>
    )
}

export default MyProducts;