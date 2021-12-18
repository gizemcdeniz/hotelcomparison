import React from 'react';
import { Card, Button, Container, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./index.scss";

function CompareHotels() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  
  // + adding the use
  useEffect(() => {
    getData1();
    getData2();

    // we will use async/await to fetch this data
    async function getData1() {
      //ibis Amsterdam Centre//
      const response = await fetch("https://seturn-api.herokuapp.com/api/hotel/130948/10422");
      const data1 = await response.json();
      console.log(data1);
      setData1(data1) ;
    }
    async function getData2() {
      //Room Mate Aitana//
      const response = await fetch("https://seturn-api.herokuapp.com/api/hotel/437565/542088");
      const data2 = await response.json();
      console.log(data2);
      setData2(data2) ;
    }
  }, []);

  return <>
   <Container style={{ padding:'4em', width:"100%"}} fluid="md">
   <h1>Populer Oteller</h1>
   <Row style={{ justifyContent:'space-between'}}>
  
   <div className="compareHotels">
    
     {Object.values(data1).map(item => (
      <div className="hotelDetails2">
        <h5>{item.name}</h5>
        <h5>{item.starRating}</h5>
  <ol>
  <li>Tea</li>
  <li>Milk</li>
</ol>
      </div>
))}
 </div>



 <div className="compareHotels">
     {Object.values(data2).map(item => (
     <div className="w3-card-2">
       <div className="w3-container">
         <h5>{item.name}</h5>
         <h5>{item.starRating}</h5>

       </div>
     </div>
 

))}
  </div>
</Row>
</Container>

  </>
}

export default CompareHotels;