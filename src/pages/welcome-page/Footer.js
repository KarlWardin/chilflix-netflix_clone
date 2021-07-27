import React from 'react'
import './Footer.css'

const Footer=()=> {
    const gridItems=["FAQ","Help Center","Account","Media Center",
                  "Investors Relations","Jobs","Ways to Watch","Terms of Use",
                  "Privacy","Cookie Preference","Corporate Information","Contact Us",
                  "Speed Test","Legal Notices","Only on Netflix"];

    const gridItemsJsx = gridItems.map((item)=>{
        return(<a href="#">{item}</a>);
    })

    return(
        <div className="footer">
            <div><p>Questions? Call 000-800-040-1843</p></div>
            <div className="grid">{gridItemsJsx}</div>
            <div>
            <select className="dropdown" name="language">
                <option>English</option>
                <option>Hindi</option>
            </select>
            </div>
            <div><p>Netflix India</p></div>
        </div>
    )
}

export default  Footer
