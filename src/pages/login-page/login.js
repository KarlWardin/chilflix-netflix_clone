import React from 'react'
import './login.css'

const Login=()=>{
    const gridItems=["FAQ","Help Center","Terms of Use",
    "Privacy","Cookie Preference","Corporate Information"];

    const gridItemsJsx = gridItems.map((item)=>{
    return(<a href="#">{item}</a>);
    })


   return(
       <div className="bg-l">
           <div className="login-window">
              <div className="window">
                  <h1>Sign In</h1>
                  <input type="email" placeholder="Email" required></input>
                  <input type="password" placeholder="Password"></input>
                  <button type="submit">Sign In</button>
                  <label><input type="checkbox"/>Remember me</label>
                  <h4>New to Netflix? <a href="#">Sign up now.</a></h4>
                  <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
              </div>
           </div>
           <div className="footer" style={{height: "40vh",backgroundColor: "rgba(0,0,0,.9)",justifyContent:"space-evenly"}}>
            <div><p>Questions? Call 000-800-040-1843</p></div>
            <div className="grid">{gridItemsJsx}</div>
            <div>
            <select className="dropdown" name="language">
                <option>English</option>
                <option>Hindi</option>
            </select>
            </div>
        </div>
       </div>
   )
}

export default Login