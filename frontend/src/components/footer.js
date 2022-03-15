import {Row} from "react-bootstrap"
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import footerPic from "../images/footer-pic.png"
import "../css/footer.css"

const Footer = () => {
    return ( 
        <div>
<div className="footer-main">
       
<Row>
<Col lg={6}>
<img className="footer-pic" src={footerPic} alt="footer-pic"></img>
</Col>
<Col lg={6}>
<h2 className="contact">Need help? Contact Us.</h2>
<Form>
<input type="email" id="email" name="email" className="mail" placeholder="email"></input>
<p><textarea className="textbox" placeholder="Message"></textarea></p>
</Form>
<Button className="submit"> Submit</Button>
</Col>


</Row>

</div>
<div className="copyright">
<h6 className="copyright-text">© 2022 COPYRIGHT | Saniस्त्री
</h6>
</div>
</div>
     );
}
 
export default Footer;