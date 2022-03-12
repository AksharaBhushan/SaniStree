import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "../css/Cart.css"

export default function Cart() {
  const [itemCount, setItemCount] = useState(1);
  
  const handleSubmit = (e) => {
    console.log("Order Placed")
  }

  return (
    <div style={{ display: "block", margin: "20px" }}>
      {/* <h4>Order Pads for your Village as The Village Offivial!</h4> */}
      <div>
        <Badge color="secondary" badgeContent={itemCount} >
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup style={{padding:"10px"}}>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}

          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(Number(itemCount) + Number(1));
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
            <p className="itemCountNum">{itemCount}</p>
        </ButtonGroup>


        <input type="number" placeholder="Enter the Number of pads" onChange={(e) => {setItemCount(e.target.value)}}  />
      </div>
    <button type="submit" onClick={handleSubmit} className="placeOrder" style={{marginTop:"10px"}}>
      Place Order
    </button>
    </div>

  );
}