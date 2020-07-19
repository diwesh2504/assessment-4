import React from 'react';
import '../styles/landing.css'
import User from './User'
import NewUser from './NewUser';
function LandingPage(){
    const [viewlogin,setViewLogin]=React.useState("login")
    return(
        <div className="container">
            <div></div>
            <div >
            <div className="buttons">
                <div><button className="btn btn-outline-secondary btn-block" onClick={()=>setViewLogin("login")} id="logintab">Login</button></div>
                <div><button className="btn btn-outline-secondary btn-block" onClick={()=>setViewLogin("register")} id="registertab">Register</button></div>
            </div>
        {viewlogin==="login"?<User/>:<NewUser/>} 
        </div>
        <div></div>
        </div>
    )

}

export default LandingPage;