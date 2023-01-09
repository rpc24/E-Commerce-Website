import { useSelector } from "react-redux";


function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-3 mb-0 rounded-0  text-white" style={{ backgroundColor:'#666699'}}>
            <img src={'shop1.png'} style={{width:"50px"}} className="float-left"/>
            {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h5 className="float-right"  style={{ fontFamily: 'lucida console' }}>Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
            <h4 className="text-center"  style={{ fontFamily: 'papyrus' }}>Welcome to E-Shopify!</h4>
            <div className="clearfix"></div>
        </div>
    )
}

export default Header;