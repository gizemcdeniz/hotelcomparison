import React from 'react';
import { Card, Button, Container, CardGroup, Row, Col} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./index.scss";
import { useHistory,Link } from "react-router-dom";


const HotelListingPage = () => {
  const location = useLocation();
  console.log(location.state.params)
  const greeting = 'Hotel Listesi!';

  let history = useHistory ();
    const handleClick = (url) => {
      //  history.push (url);
    }    

  const [data, setData] = useState([]);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://seturn-api.herokuapp.com/api/location?location=" + location.state.params.search + "&checkIn=" + location.state.params.checkIn + "&checkOut="+ location.state.params.checkOut + "&adult=" + location.state.params.adult);
      const data = await response.json();
      console.log(data);
      setData(data) ;
    }
  }, []);
  

  return <>
<Container  style={{ padding: "3em"}}  fluid="md">
  <h1>Arama Sonuçlarınız</h1>
  {Object.values(data).map(item => (
  <Card style={{ padding: "3em"}}  > 
  <Card.Header>{item.name[0]}</Card.Header>
  <Card.Body  style={{ display: "flex", justifyContent:"space-between" }}>
  <Row >
    <Col>
  <Card.Img style={{ width: '12rem', height: '15rem' }} variant="left" src={item.image_url} />
  </Col>
  <Col >
    </Col>
    </Row>
    <Col>
    <Card className="bestPriceSection" style={{ width: "30em"}}>
  <Card.Header style={{ backgroundColor: "lightgreen"}} as="h5"><Card.Title> Best Provider: {item[0].provider}</Card.Title></Card.Header>
  <Card.Body>
    <Card.Text>
      Best Price: {item[0].price} €
    </Card.Text>
    <Button onClick={handleClick} variant="success">Göster</Button>
  </Card.Body>
</Card>
  {Object.values(item['detail']).map(items => (
    <Card className="secondPriceSection" style={{ width: "20em"}}>
   <Card.Header style={{ backgroundColor: "lightblue"}} as="h5">

    <Card.Title> Diğer Tedarikçiler: {items['provider']}</Card.Title>  
  </Card.Header>
  <Card.Body>
    <Card.Text>
     Fiyat : {items['total_price']} €
    </Card.Text>
    <a rel="noopener noreferrer" href={items['url']} target="_blank">
            <Button variant="success">Göster</Button>
    </a>
  </Card.Body>
  </Card>
  ))}
</Col>
  </Card.Body>
</Card>
  ))}
</Container>
  </>
}

export default HotelListingPage;
