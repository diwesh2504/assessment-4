import React from 'react';
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

function NewUser(){
   var click=0;
    const [userData,setUserData]=React.useState({firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }});
    const handleChange=async (e)=>{
        e.preventDefault();
        const data=userData;
        if (formValid(userData)) {
            alert("ID created Successfully");
          } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
          fetch('http://localhost:3004/users',{
            method:"POST",
            body:JSON.stringify(userData),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
          
          
        };
    
    const onChange=e=>{
        
        const { name, value } = e.target;
        let formErrors = { ...userData.formErrors };
        console.log(name,value);
    /*switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }*/

    setUserData(prevData=>
        {
            return{...prevData,[name]:value}
        })
    console.log(userData);
    
    }
    React.useEffect(()=>{
        
        

    },[])

    return(
        <div>
        <form onSubmit={e=>handleChange(e)} noValidate>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" id="fname" name="firstName" onChange={e=>{onChange(e)}} placeholder="First Name"/>
               </div>
               <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lastName" onChange={e=>{onChange(e)}} placeholder="Last Name"/>
               </div>
               <div className="form-group">
                    <label htmlFor="setemail">Set User ID:</label>
                    <input type="email" className="form-control" id="setemail" name="email" onChange={e=>{onChange(e)}} placeholder="Set your ID"/>
               </div>
                <div className="form-group">
                    <label htmlFor="newpassword">Set Password</label>
                 <input type="text" className="form-control" id="newpassword" name="password" onChange={e=>{onChange(e)}} placeholder="Set Password.."/>
                </div>
                <div >
                    <button type="submit" className="btn btn-secondary btn-block">REGISTER</button>
                </div>
            </form>
            <p>
                {userData.firstName}
                {userData.lastName}
                {userData.email}
                {userData.password}
            </p>
            </div>
    )
}









export default NewUser;