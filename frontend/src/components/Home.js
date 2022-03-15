import "../css/home.css"
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import volunteer from "../images/charity.png"
import donate from "../images/donation.png"
import buy from "../images/cart.png"
import { Button } from "react-bootstrap";
import cover from "../images/cover.png"
import coverrr from "../images/cover-2.png"





const Home = () => {
    return (
        <div>
            <div className="container-1">

                <Row >
                    <Col className="column-1">
                        <h1 className="taboo">"Shattering the    taboo"</h1>
                        <h6 className="taboo-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
                    </Col>
                    <Col className="column-2">
                        <img  className="cover" src={cover} alt="cover"></img>
                    </Col>

                </Row>
            </div>

            <div className="container-2">
            <Row>
            <Col>
            <img className="icon" src={volunteer} alt="volunteer"></img>
            <p><Button className="icon-button">Volunteer</Button></p>
            </Col>
            <Col>
            <img className="icon" src={donate} alt="donate"></img>
            <p><Button className="icon-button" style={{marginLeft:"110px"}}>Donate</Button></p>
            </Col>
            <Col>
            <img className="icon" src={buy} alt="buy"></img>
            <p><Button className="icon-button" style={{marginLeft:"115px"}}>Buy</Button></p>
            </Col>
            </Row>
            </div>

            <div className="container-3">
            <Row>
            <Col>
            <h1 className="support">Support your women.</h1>
            <h6 className="support-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
            </Col>
            <Col>
            <img className="coverrr" src={coverrr} alt="cover"></img>
            </Col>
            </Row>
            </div>

           
            
        </div>



    );
}

export default Home;