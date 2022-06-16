import React from "react";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"


export default function Footer () {
    return (
        <footer className="footer">
            <img src={twitter} className="twitter"/>
            <img src={facebook} className="facebook" />
            <img src={instagram} className="instagram" />
            <img src={github} className="github" />
        </footer>        
    )
}