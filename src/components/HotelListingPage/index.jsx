import React from 'react';
import { Card, Button, Container, CardGroup, Row, Col } from "react-bootstrap";

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./index.scss";
import { useHistory, Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';


const HotelListingPage = () => {
  const location = useLocation();
  console.log(location.state.params)
  const greeting = 'Hotel Listesi!';

  let history = useHistory();
  const handleClick = (url) => {
    //  history.push (url);
  }


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  // + adding the use
  useEffect(() => {


    async function getData() {
      const response = await fetch("https://seturn-api.herokuapp.com/api/location?location=" + location.state.params.search + "&checkIn=" + location.state.params.checkIn + "&checkOut=" + location.state.params.checkOut + "&adult=" + location.state.params.adult);
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    }
    getData();
  }, []);




  return <>
search-card
    {loading ? (
      <Spinner
        style={{ marginBottom: 27 }}
        animation="border"
        variant="danger"
      />
    ) :
      <Container fluid="md">
        <h1 style={{ margin: "2em 0" }} >Arama Sonuçlarınız</h1>
        <Row>
          {Object.values(data).map(item => (
            <Card className='search-card' style={{ marginBottom: "2em", }} sm={12}>
              {/* <Card.Header style={{ fontWeight:"bold", fontSize:"30px", backgroundColor:"#C7CEDB", color:"black"}}>{item.name[0]}</Card.Header> */}
              <Card.Body className='search-card-body' style={{ display: "flex", justifyContent: "space-between" }}>
                <Row>
                  <Col sm={3}>
                    <Card.Img style={{ width: "100%", borderRadius: "10px" }} variant="left" src={item.image_url} />
                  </Col>
                  <Col sm={4}>
                    <Card.Body>
                      <Card.Text>
                        <h5>Ibis Amsterdan Centre</h5>
                        <h6>Otel</h6>
                        <hr />
                        <p>Amsterdam Şehir Merkezi 1 km uzaklıkta</p>
                        <hr />
                        <p>
                          <span className='points'>7.8</span>
                          İyi (100 değerlendirme)
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col sm={5} style={{ display: "flex", justifyContent: "space-between" }}>
                    {Object.values(item['detail']).map(items => (
                      items['best'] ?
                        (<Card className="bestPriceSection" style={{ width: "40em", height: "auto", marginBottom: "2em", display: 'flex', justifyContent: "space-evenly" }}>
                          {items['repeat'] ? (<Card.Header as="h5"><Card.Title style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}> Daha once ilgilendiniz   </Card.Title></Card.Header>) : ''}
                          <Card.Header as="h5"><Card.Title className="best-price-title" style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}> {item.name[0]}   <Card.Img style={{ width: '90px', height: '90px', borderRadius: '100%' }} variant="left" src="https://i.pinimg.com/originals/30/ff/07/30ff070d7ac4da9ddf850889d02a3930.jpg" /></Card.Title></Card.Header>
                          <Row>
                            <Card.Body className='best-price-card-body'>
                              <Card.Text >
                                {items['repeat'] ? (<Card.Header as="h5"><Card.Title style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}> Daha once ilgilendiniz   </Card.Title></Card.Header>) : ''}
                                <Row>
                                  <Col>
                                    <Card.Title style={{ fontSize: "15px" }} >  {items['provider']}{items['repeat']} </Card.Title>
                                    <Card.Title className='best-price-text'> En İyi Fiyat: {items['total_price']} </Card.Title>
                                  </Col>
                                  <Col>
                                    <Card.Title style={{ fontSize: "15px" }} >  {items['provider']}{items['repeat']} </Card.Title>
                                    <Card.Title className='best-price-text'> En İyi Fiyat: {items['total_price']} </Card.Title>
                                  </Col>
                                </Row>
                                {/* <Card.Title style={{ fontSize: "15px" }} > Puan: {items['rate']} </Card.Title> */}
                              </Card.Text>
                              <Col >
                                <a rel="noopener noreferrer" href={items['url']} target="_blank">
                                  <Button style={{ backgroundColor: "#E63946", width: '30%', height: 'auto' }} onClick={handleClick} variant="success">Oda Seç</Button>
                                </a>
                              </Col>
                            </Card.Body>
                          </Row>
                        </Card>) :
                        (<Card className="secondPriceSection" style={{ width: "20em", marginLeft: "2em" }}>
                          <Card.Header style={{ backgroundColor: "#EDF7F6" }} as="h5">
                            <Card.Title style={{ color: "white", color: "black" }}>{items['provider']}</Card.Title>
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              Fiyat : {items['total_price']} €
                            </Card.Text>
                            <a rel="noopener noreferrer" href={items['url']} target="_blank">
                              <Button variant="success">Oda Seç</Button>
                            </a>
                          </Card.Body>
                        </Card>)
                    ))}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    }

{loading ? (
            <Spinner
              style={{ marginBottom: 27 }}
              animation="border"
              variant="danger"
            />
          ) : 
<Container fluid="md">
  <h1 style={{ margin:"2em 0"}} >Arama Sonuçlarınız</h1>
  {Object.values(data).map(item => (
    
  <Card style={{ marginBottom:"2em", }} > 
  
  {/* <Card.Header style={{ fontWeight:"bold", fontSize:"30px", backgroundColor:"#C7CEDB", color:"black"}}>{item.name[0]}</Card.Header> */}
  <Card.Body  style={{ display: "flex", justifyContent:"space-between" }}>
  <Row >
    <Col>
  <Card.Img style={{ width: '20em', height: '20em', marginRight:"2em"}} variant="left" src={item.image_url} />
  </Col>
    </Row>
    <Row style={{ display:"flex", justifyContent:"space-between"}}>
  {Object.values(item['detail']).map(items => (
    
    items['best'] ? 
    (<Card className="bestPriceSection" style={{ width: "40em", height:"18em", backgroundColor:"white", marginBottom:"2em", display:'flex', justifyContent:"space-evenly" }}>
       {items['repeat'] ? (<Card.Header  as="h5"><Card.Title style={{color:"black",fontWeight:"bold", fontSize:"30px" }}> Daha once ilgilendiniz   </Card.Title></Card.Header>) : ''}
       <Card.Header  as="h5"><Card.Title style={{color:"black",fontWeight:"bold", fontSize:"30px" }}> { (Array.isArray(item.name) && item.name.length) ? item.name[1] : item.name }   <Card.Img style={{ width: '70px', height: '80px', borderRadius:'50%' }} variant="left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU_bjuwqndQdmCGwSWEVHi5JPGZ3-C3Zd5XdITR8vq_ajnV_mfMrHHOrqfYtQOt9Lcn0&usqp=CAU" /></Card.Title></Card.Header>
    <Row>
    <Card.Body  >
      <Card.Text >
      {items['repeat'] ? (<Card.Header  as="h5"><Card.Title style={{color:"black",fontWeight:"bold", fontSize:"30px" }}> Daha once ilgilendiniz   </Card.Title></Card.Header>) : ''}
      <Card.Title style={{ fontSize: "15px"}} >  {items['provider']}{items['repeat'] } </Card.Title> 
      <Card.Title style={{ fontSize: "15px"}} > En İyi Fiyat: {items['total_price']} </Card.Title>  
      <Card.Title style={{ fontSize: "15px"}} > Puan: {items['rate']} </Card.Title> 
      </Card.Text>

      <Col >
      <a rel="noopener noreferrer" href={items['url']} target="_blank">
      <Button style={{ backgroundColor: "green", width: '30%', height: 'auto'}} onClick={handleClick} variant="success">Oda Seç</Button>
      </a>
      </Col>
    </Card.Body>
    </Row>
  </Card> ):
    (<Card className="secondPriceSection" style={{ width: "30em", marginLeft:"2em"}}>
   <Card.Header style={{ backgroundColor:"#EDF7F6"}} as="h5">
    <Card.Title  style={{ color:"white", color:"black"}}>{items['provider']}</Card.Title>  
  </Card.Header>
  <Card.Body>
    <Card.Text>
     Fiyat : {items['total_price']} €
    </Card.Text>
    <a rel="noopener noreferrer" href={items['url']} target="_blank">
            <Button  variant="success">Oda Seç</Button>
    </a>
  </Card.Body>
 
  </Card>)
  ))}
</Row>
  </Card.Body>
</Card>
  ))}
</Container>
}
  </>

}

export default HotelListingPage;
