import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Three from "../assets/3.png";

class Bottom extends Component {
    render(){
        return(
           <div id="Bottom">
               <Col id="text3">
               INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
               </Col>
               <Col>
               <img id="Three"src={Three} alt="Three"/></Col>
               <Col id="text4">
               Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
               </Col>
           </div> 
        )
    }
}
export default Bottom;