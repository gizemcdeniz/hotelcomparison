import React from 'react';
import data from './data.json';
import { Headphones } from 'react-bootstrap-icons';
import "./index.scss";
import Piri from "./piri.png"
import {
  Button,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";


function AuidoGuide() {

     const listItems = data.map(item =>
     <>
<Card className="auidoGuideCard" style={{ width: '18rem' }}>
  <Card.Img className="auidoImage" variant="top" src={item.image} alt={item.name} />
  <Card.Body style={{ width: '18rem', height: '10em' }}>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text ><Headphones color="royalblue" size={30} />
      {item.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">

    <ListGroupItem><span>Duration:</span>   {item.duration}</ListGroupItem>
    <ListGroupItem><span>Price:</span>   ${item.buy_price} </ListGroupItem>
  </ListGroup>
  <Card.Body style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} > 
 <Card.Img style={{ width: "5rem", height: "4rem"}} className="auidoImage" variant="top" src={Piri} alt={item.name} />
    <Button id="addtoCard">Add To Card</Button>
  </Card.Body>
</Card>
</>
);
 {
 
//   <div className="auidoGuideCard">
//         <a href={item.url}>
//             <img className="img-fluid" 
//                   src={item.image} 
//                   alt={item.name} />
//              <p>{item.name}</p>
//              <p>{item.duration}</p>
//           </a>
//           <Button>Add To Cart</Button>
//      </div>

    return(
        <>
        <div className="headerAuidoGuide">
        <div className="oops">
<h2>If we don't have a tour, we have an auido-guide tour!</h2>
<h3>You will never be bored</h3>
</div>
        <div className="listofItems">
            { listItems }
        </div>
        </div>
        </>
      )
}
}

export default AuidoGuide;