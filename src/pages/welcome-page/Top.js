import React from 'react'
import "./Top.css"

const Top=()=> {
    return(
    <div className="bg">
        <div className="container">
        <div className="nav">
            <button className="signinbtn">Sign In</button>
            <select className="dropdown-d" name="language">
                <option>English</option>
                <option>Hindi</option>
            </select>
        </div>
        <div><h1 style={{fontSize:"4em"}}>Unlimited movies, TV<br/> shows and more.</h1></div>
        <div><h2>Watch anywhere. Cancel anytime.</h2></div>
        <div><p>Ready to watch? Enter your email to create or restart your membership.</p></div>
        <div>
            <input className="input" type="text"  placeholder="Email Address"  required></input>
            <button className="button" type="submit">Get Started &gt;</button>
        </div>
        </div>
     </div>
    )
}

export default Top