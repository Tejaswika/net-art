import React,{ Component } from "react";
import Logo from "../assets/logo.png";

class Heading extends Component {
    render(){
        return(
            <div id="logo">
               <img src={Logo} alt="logo"/> 
            </div>
        )
    }
}
export default Heading;