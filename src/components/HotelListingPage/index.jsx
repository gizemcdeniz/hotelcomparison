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

    {loading ? (
      <div> 
      <Spinner
        style={{ marginBottom: '27', justifyContent:'space-evenly' }}
        animation="border"
        variant="danger"
        size="xl"
      />
      </div>
    ) :
      <Container fluid="md">
        <h1 style={{ margin: "2em 0" }} >Arama Sonuçlarınız</h1>
          {Object.values(data).map(item => (
            <Card className='search-card' style={{ marginBottom: "2em", justifyContent:"column"}}>
              {/* <Card.Header style={{ fontWeight:"bold", fontSize:"30px", backgroundColor:"#C7CEDB", color:"black"}}>{item.name[0]}</Card.Header> */}
              <Card.Body className='search-card-body' style={{ display: "flex", justifyContent: "space-evenly" }}>
                
                  <Col sm={3}>
                    <Card.Img style={{ width: "350px", height: "40%", borderRadius: "10px" ,margin: "22px"}} variant="left" src={item.image_url} />
                  </Col>
                  
                    <Card.Body style={{ marginBottom: "2em" }}>
                    
                      <Card.Text>
                      {Object.values(item['detail']).map(items => (
                        <div className="bigTable">
                          <div className='providerSection'>
                        <h5 className='tittleofProvider'>{(Array.isArray(item.name) && item.name.length) ?item.name[0]: item.name}</h5>
                        <h6 className='tittleofProvider'>{(Array.isArray(item.city) && item.city.length) ?item.city[0]: item.city}</h6>
                        
                        <p>
                          <span className='points'> {items['rate']}</span>
                          İyi (100 değerlendirme)
                          
                        </p>
                        </div>
                        <div className='priceSectionForProvider'>
                      
                        <Card.Title style={{ fontSize: "100%", fontSize:"18px", color: 'rgb(10, 10, 87)'}} >{items['provider'] == 'bookingcom' ? <img className='providerLogo' src="https://www.haberodak.com/wp-content/uploads/2020/10/screen-shot-2017-10-24-at-9-54-22-am.png" alt="booking.com Logo"/> 
                                    : ''} </Card.Title>
                                    <Card.Title style={{ fontSize: "100%", fontSize:"18px", color: 'rgb(10, 10, 87)'}} >{items['provider'] == 'hotelscom' ? <img className='providerLogo' src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Hotels.com_logo.svg/1280px-Hotels.com_logo.svg.png" alt="hotels.com Logo"/> 
                                    : ''}    </Card.Title>                                 
                                    <Card.Title style={{ fontSize: "100%", fontSize:"18px", color: 'rgb(10, 10, 87)'}} >{items['provider'] == 'setur' ? <img className='providerLogo' src="http://www.alanyatatil.net/wp-content/uploads/2009/07/setur.jpg" alt="setur Logo"/> 
                                    : ''} </Card.Title>
                                    {/* <Card.Title className='best-price-text'> {items['provider']}{items['repeat']} : {items['total_price']} </Card.Title> */}
                                    <a rel="noopener noreferrer" href={items['url']} target="_blank">
                                   
                                    {items['best'] ? 
                                    <Button style={{ width:"100%"}} className='best-price-provider' onClick={handleClick} variant="success"> Best Price: {items['total_price']} €  </Button>  : 
                                    <Button style={{ width:"100%"}} className='best-price-text' onClick={handleClick} variant="success"> {items['total_price']} € </Button>
                                
                                  }

                                    
                            </a>

                            </div>           
                                  
                        </div>
                         ))}
                      </Card.Text>
                    </Card.Body >
              
                  {/* <Col sm={5} style={{ display: "flex", justifyContent: "space-between" }}>
                    {Object.values(item['detail']).map(items => (
                      items['best'] ?
                        (<Card className="bestPriceSection" style={{ width: "40em", height: "auto", marginBottom: "2em", display: 'flex', justifyContent: "space-evenly" , border:"1px solid red" }}>
                          {items['repeat'] ? (<Card.Header as="h5"><Card.Title style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}> Daha once ilgilendiniz   </Card.Title></Card.Header>) : ''}
                          <Card.Header as="h5"><Card.Title className="best-price-title" style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}> {item.name[0]}   <Card.Img style={{ width: '90px', height: '90px', borderRadius: '100%' }} variant="left" src="https://i.pinimg.com/originals/30/ff/07/30ff070d7ac4da9ddf850889d02a3930.jpg" /></Card.Title></Card.Header>
                          
                        </Card>) :
                        (<Card className="secondPriceSection" style={{ width: "20em", marginLeft: "2em" }}>
                         
                        </Card>)
                    ))}
                  </Col> */}
               
              </Card.Body>
            </Card>
          ))}
  
      </Container>
    }
  </>

}

export default HotelListingPage;
