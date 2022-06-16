import React from "react";
import safiye from "../images/safiye.jpeg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"


export default function Info () {
    return (
        <div className="info">
            <img src={safiye} className="info--foto"/>
            <h1>Safiye Elif Karatas</h1>
            <h3>4th Grader</h3>
            <h4>sek@gmail.com</h4>
            <button><img src={email}/>Email</button>
            <button><img src={linkedin}/>LinkedIn</button>
        </div>
    )
}