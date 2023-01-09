import { blue } from "@mui/material/colors";

function Product(props){
    const {x,showModal}=props
    return (
        <div className="col-sm-3" key={x.prodid}>
            <div className="card text-center text-black mb-3 bg-blue" style={{boxShadow:"0 0 2px 2px black"}}>
                <div className="card-header p-1 border-bottom border-white" style={{backgroundColor: '#ffcccc'}}>
                    <h5>{x.pname}</h5>
                </div>
                <div className="card-body py-1">
                <img style={{width:"90%",height:"250px",marginBottom:"10px"}} src={"http://localhost:8080/"+x.photo} className="img-thumnail" />
                <h6 className="float-left">Brand: {x.brand}</h6>                
                <h6 className="float-right">Price: &#8377; {x.price}</h6>                           
                </div>
                <div className="card-footer p-1" style={{backgroundColor: '#ffffcc'}}>
                    <button onClick={e=>showModal(x)} className="btn btn-primary btn-sm " style={{boxShadow:"0 0 4px 4px #ccffff"}}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;