import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import One from "../assets/1.png";
import Two from "../assets/2.png";
import Logo from "../assets/logo.png";

class Top extends Component {
    render(){
        return(
            <Row id="top">
               <Col lg="2"><img id="sideImg" src={One} alt="One" /></Col>
               <Col>
               <Row id="logo" >
               <img src={Logo} alt="logo" width="100%"/> 
            </Row>
               <div id="text">
                   <p>
                       <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
                       <ul>
                           <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                           <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                       </ul></p>
               </div>
               <img id="Two" src={Two} alt="Two"/>
               <div id="text2">
                   <p>
                   Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                   
                   </p>
               </div>
               </Col>
            </Row>
        )
    }
}
export default Top;