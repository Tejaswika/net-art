import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Footer extends Component {
    render(){
        return(
           <div id="Footer">
                <Col id="line"></Col>
                <Col id="text5"><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></Col>
                <Col id="text6"><p>CHEMICALS <div id="line2">||</div> PROCESS POWER WATER <div id="line2">||</div> WASTE WATER OILS <div id="line2">||</div> GAS PHARMA SUGARS <div id="line2">||</div> DISTILLERIES PAPER <div id="line2">||</div> PULP MARINE <div id="line2">||</div> DEFENCE METAL <div id="line2">||</div> MINING FOOD <div id="line2">||</div> BEVERAGE PETROCHEMICAL <div id="line2">||</div> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <div id="line2">||</div> RESIDENTIAL</p></Col>
           </div> 
        )
    }
}
export default Footer;