import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import profile from "../profile.jpg"
import "../css/team.css"

const Team = () => {
    return ( 

        <div className="team">
        <Row>
        <Col>
        <img className="picture" src={profile} alt="aditya"></img>
        <p> <div class="middle">
        <div class="text">John Doe</div>
      </div></p>
        </Col>
        <Col>
        <img className="picture" src={profile} alt="aditya"></img>
        </Col>
        <Col>
        <img className="picture" src={profile} alt="aditya"></img>
        </Col>
        <Col>
        <img className="picture" src={profile} alt="aditya"></img>
        </Col>
        </Row>
        </div>
     );
}
 
export default Team;