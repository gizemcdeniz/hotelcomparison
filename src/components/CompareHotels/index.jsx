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
   <Row style={{ justifyContent:'space-between'}}>
  
   <div className="compareHotels">
     {Object.values(data1).map(item => (
      <div className="hotelDetails2">
         <h2 style={{ textAlign: 'center'}}>{item.name}</h2>
      </div>
      
))}
  <Card style={{ width: '30rem', marginLeft:"1em" }}>
      <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/311927379.jpg?k=16a2e50c992ff849c2639bed280692874e375287399f1e6e938241ce97c4cf3c&o=&hp=1" />
      <Card.Body>
      <Card.Title>Amsterdam</Card.Title>
      <a  style={{ margin: "2em 1em", padding: "1em", fontSize:"12px", borderRadius:"10em" }} href="#" class="badge badge-primary">9.1</a>
      <a  style={{ margin: "2em 0", padding: "1em", fontSize:"12px", borderRadius:"10em" }} href="#" class="badge badge-success">'COVID-19: Hygiene and cleanliness</a>
        <ListGroup></ListGroup>
        <ListGroup>
        <ListGroup.Item disabled>Ücretsiz Wifi</ListGroup.Item>
  <ListGroup.Item>Günlük oda temizleme</ListGroup.Item>
  <ListGroup.Item>24 saat açık resepsiyon</ListGroup.Item>
  <ListGroup.Item>International Personel</ListGroup.Item>
</ListGroup>
<br></br>
        <Button variant="primary">Standart Oda: 90 € / Gecelik</Button>
      </Card.Body>
    </Card>

 </div>



 <div className="compareHotels">
     {Object.values(data2).map(item => (
     <div className="w3-card-2">
       <div className="w3-container">
       <h2 style={{ textAlign: 'center'}}>{item.name}</h2>
       </div>
     </div>


))}

<Card style={{ width: '30rem', marginLeft:"1em" }}>
      <Card.Img  style={{height: "22em"}}variant="top" src="https://room-matehotels.com/images/img/aitana/hotel/galeria/aitana_gal-4.jpg" />
      <Card.Body>
      <Card.Title>Amsterdam</Card.Title>
      <a  style={{ margin: "2em 1em", padding: "1em", fontSize:"12px", borderRadius:"10em" }} href="#" class="badge badge-primary">8.9</a>
      <a  style={{ margin: "2em 0", padding: "1em", fontSize:"12px", borderRadius:"10em" }} href="#" class="badge badge-success">'COVID-19: Hygiene and cleanliness</a>
        <ListGroup></ListGroup>
        <ListGroup>
  <ListGroup.Item disabled>Ücretsiz Wifi</ListGroup.Item>
  <ListGroup.Item>Günlük oda temizleme</ListGroup.Item>
  <ListGroup.Item>24 saat açık resepsiyon</ListGroup.Item>
  <ListGroup.Item>İş Oteli</ListGroup.Item>
</ListGroup>
<br></br>
        <Button variant="primary">Standart Oda: 60 € / Gecelik</Button>
      </Card.Body>
    </Card>

  </div>
</Row>
</Container>

  </>
}

export default CompareHotels;