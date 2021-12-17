import React from 'react';
import { Card, Button, Container, Row, CardGroup} from "react-bootstrap";
import { useState, useEffect } from 'react';

function CompareHotels() {
  const [data, setData] = useState([]);



  
  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://seturn-api.herokuapp.com/api/hotel-list-compare");
      const data = await response.json();
      console.log(data);
      setData(data) ;
    }
  }, []);

  return <>
   <Container style={{ padding:'4em'}} fluid="md">
     <h1>Populer Oteller</h1>
     <Row style={{ justifyContent:'space-between'}}>
   {Object.values(data).map(item => (
  <CardGroup style={{ marginBottom:"2em", width: '20rem', height: '35em', boxShadow: "0 0 10px gray"}}>
  <Card>
    <Card.Img variant="top" src={item.image_url} />
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