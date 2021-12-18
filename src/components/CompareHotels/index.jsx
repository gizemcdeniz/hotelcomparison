import React from 'react';
import { Card, Button, Container, Row, CardGroup} from "react-bootstrap";
import { useState, useEffect } from 'react';

function CompareHotels() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);



  
  // + adding the use
  useEffect(() => {
    getData1();
    getData2();

    // we will use async/await to fetch this data
    async function getData1() {
      const response = await fetch("https://seturn-api.herokuapp.com/api/hotel/130948/10422");
      const data1 = await response.json();
      console.log(data1);
      setData1(data1) ;
    }
    async function getData2() {
      const response = await fetch("https://seturn-api.herokuapp.com/api/hotel/194310/10445");
      const data2 = await response.json();
      console.log(data2);
      setData2(data2) ;
    }
  }, []);

  return <>
   <Container style={{ padding:'4em'}} fluid="md">
     <h1>Populer Oteller</h1>
     <Row style={{ justifyContent:'space-between'}}>
   {Object.values(data1).map(item => (
  <CardGroup style={{ marginBottom:"2em", width: '20rem', height: '35em', boxShadow: "0 0 10px gray"}}>
  <Card>
    <Card.Img variant="top" src={item.content} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="success">Oteli İncele</Button>{' '}
    </Card.Footer>
  </Card>
  </CardGroup>
    ))}
     {Object.values(data2).map(item => (
  <CardGroup style={{ marginBottom:"2em", width: '20rem', height: '35em', boxShadow: "0 0 10px gray"}}>
  <Card>
    <Card.Img variant="top" src={item.content} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="success">Oteli İncele</Button>{' '}
    </Card.Footer>
  </Card>
  </CardGroup>
    ))}
    </Row>
  </Container>
  </>
}

export default CompareHotels;