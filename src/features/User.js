import React from 'react';
function User(){
    return(
        <form>
                <div className="form-group">
                    <label htmlFor="userid">USER ID:</label>
                    <input type="text" className="form-control" id="userid" placeholder="User ID.."/>
            </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                 <input type="password" className="form-control" id="password" placeholder="Password.."/>
                </div>
                <div >
                    <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                </div>
            </form>
    )
}








export default User