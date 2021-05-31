import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Red extends Component {
    render(){
        return(
           <Row id="Red">
                   <Col><i class="fas fa-phone"></i>
                   <p>Toll-Free No.</p></Col>
                   <Col><i class="fab fa-facebook-f"></i>
                   <p>Facebook</p></Col>
                   <Col><i class="fas fa-globe"></i>
                   <p>Website</p></Col>
           </Row> 
        )
    }
}
export default Red;