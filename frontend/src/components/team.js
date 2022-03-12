import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import akshara from "../akshara.jpeg"
import japneet from "../japneet.jpeg"
import aditya from "../aditya.jpg"
import kanwar from "../kanwar.jpg"
import "../css/team.css"

const Team = () => {
    return ( 

        <div className="team">
        <Row>
        <Col>
        <div className="container">
        <img className="picture" src={aditya} alt="aditya"></img>
        <p> <div class="middle">
        <div class="text">Aditya Dhir</div>
        
      </div></p>
      </div>
        </Col>
        <Col>
        <div className="container">
        <img className="picture" src={akshara} alt="akshara"></img>
        <p> <div class="middle">
        <div class="text">Akshara Bhushan</div>
        
      </div></p>
      </div>
        </Col>
        <Col>
        <div className="container">
        <img className="picture" src={japneet} alt="japneet"></img>
        <p> <div class="middle">
        <div class="text">Japneet Kaur</div>
        
      </div></p>
      </div>
        </Col>
        <Col>
        <div className="container">
        <img className="picture" src={kanwar} alt="kanwar"></img>
        <p> <div class="middle">
        <div class="text">Kanwarbir Singh</div>
        
      </div></p>
      </div>
        </Col>
        </Row>
        </div>
     );
}
 
export default Team;