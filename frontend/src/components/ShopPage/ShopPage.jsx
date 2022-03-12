import React from 'react'
import Cart from '../Cart';
import {Card, Button} from "react-bootstrap";
import "./ShopPage.css";

const ShopPage = () => {

    console.log(ngoData)
  return (
    <div>

        <h1>Buy Pads Here</h1>
        {/* <h2>{JSON.stringify(ngoData)}</h2> */}

        <p>NGO Name</p>

        <div className='shopCarts'>
            <Card style={{ width: '18rem', height:"60vh" }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ8cdR1AwiqzDwyV1UWeJcMJ63RcvRe1x0A&usqp=CAU" />
                <Card.Body>
                    <Card.Title style={{fontWeight:"900", fontSize:"1.2em"}}>Ultra Thin</Card.Title>
                    <Cart/>
                    
                    {/* <Button variant="primary">Go somewhere</Button> */}


                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height:"60vh"  }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ8cdR1AwiqzDwyV1UWeJcMJ63RcvRe1x0A&usqp=CAU" />
                <Card.Body>
                    <Card.Title style={{fontWeight:"900", fontSize:"1.2em"}}>Dry Ned</Card.Title>
                    <Cart/>
                    
                    {/* <Button variant="primary">Go somewhere</Button> */}


                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height:"60vh"  }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ8cdR1AwiqzDwyV1UWeJcMJ63RcvRe1x0A&usqp=CAU" />
                <Card.Body>
                    <Card.Title style={{fontWeight:"900", fontSize:"1.2em"}}>Cotton</Card.Title>
                    <Cart/>
                    
                    {/* <Button variant="primary">Go somewhere</Button> */}


                </Card.Body>
            </Card>
            
        </div>

       
    </div>
  )
}

export default ShopPage;