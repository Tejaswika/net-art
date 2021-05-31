
import Top from "./components/top";
import Bottom from "./components/bottom"
import Footer from "./components/footer";
import Red from "./components/redFooter";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

function App() {
  return (
    <div className="App">
      <Row><Col><Top /></Col></Row>
      <Row><Bottom /></Row>
      <Row><Footer /></Row>
      <Row><Col><Red /></Col></Row>
    </div>
  );
}

export default App;
