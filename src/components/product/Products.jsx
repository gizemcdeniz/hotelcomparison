import React, { useState,useEffect } from 'react';
import { Button, Accordion, Card } from "react-bootstrap";
import axios from 'axios';
import { Search } from 'react-bootstrap-icons';
import { ArrowRight, Alarm, Binoculars, Signpost } from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar'


export default function Products({ setCart, cart }) {


  const [state, setResponseData] = useState([])
  const [distanceList, setDistanceList] = useState([])
  const [totalDateTime, setTotalDateTime] = useState( ((localStorage['hours'] * 60 + parseInt(localStorage['minutes']))/60))

  const [remainingDateTime, setRemainingDateTime] = useState((localStorage['hours'] * 60 + parseInt(localStorage['minutes']))/60)


  const [map, setMap] = useState()
    useEffect(() => {
      localStorage['remaining'] = 0;
      localStorage['cartItems'] = [];
      axios({
        "method": "GET",
        "url": "https://justnow-api.herokuapp.com/api/search",
      })
    .then((response) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },[])

  const addToCart = async (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);

      // const latItem =  product.lat
      // const longItem = product.long
      const latItem =  product.lat
      const longItem = product.long
      console.log(latItem)
      console.log(longItem)
    }

    let durationItem = extractInteger(itemInCart.duration)
    let selectedHours = parseInt(localStorage['hours'])
    let selectedMinutes = parseInt(localStorage['minutes'])

    if(parseInt(localStorage['remaining']) === 0) {
      localStorage['remaining'] = (selectedHours * 60 + selectedMinutes) - (durationItem.hour * 60 + durationItem.min)
    } else {
    localStorage['remaining'] = parseInt(localStorage['remaining']) - (durationItem.hour * 60 + durationItem.min)
  }


  setRemainingDateTime(parseInt(localStorage['remaining'])/60)
 
  if(parseInt(localStorage['remaining']) === 0) {
      window.alert("Your time limit over")
  } else if(localStorage['remaining'] < 0) {
    window.alert("Your time limit exceed "+ (parseInt(localStorage['remaining'])*-1)/60 + " Hour!")
  }

    if(newCart.length == 1) {
      // let lat1 = localStorage['currentLatitude']
      // let long1 = localStorage['currentLongitude']

      let lat1 = 41.906539
      let long1 = 12.483015

      let lat2 = itemInCart.lat
      let long2 = itemInCart.long
       await checkDistanceBetweenLocations(lat1,long1,lat2,long2).then((value) => {
         setDistanceList(names => [...names, value])
        })
    } else {
       await checkDistanceBetweenLocations(
          newCart[newCart.length-1]['lat'],
          newCart[newCart.length-1]['long'],
          newCart[newCart.length-2]['lat'],
          newCart[newCart.length-2]['long']).then((value) => {
            setDistanceList(names => [...names, value])
          })
      const latItem =  product.lat
      const longItem = product.long
      console.log(latItem)
      console.log(longItem)
    }

    localStorage['cartItems'] = JSON.stringify(newCart)

    setCart(newCart);
    
  };

  const checkDistanceBetweenLocations = async (lat1 = 0,long1 = 0,lat2 = 0,long2 = 0) => {
    return axios({
      "method": "GET",
      "url": "https://justnow-api.herokuapp.com/api/distance?lat1="+lat1+"&long1="+long1+"&lat2="+lat2+"&long2="+long2,
    })
  .then((response) => {
      return response.data
    })
  }

  function extractInteger(str, show = false) {
    let arr = new Set(["0","1","2","3","4","5","6","7","8","9"])
    let flag = false;
    let hour = 0;
    let min = 0;

    for (var i = 0; i < str.length; i++) {
      if(str[i] == 'H') {
        flag = true;
      }

      if(arr.has(str[i]) && !flag) {
        hour += str[i]
      }

      if (arr.has(str[i]) && flag) {
        min += str[i]
      }
    }
    if(show) {
      return parseInt(hour) + ':' + parseInt(min)
    } 

    return {
      hour: parseInt(hour),
      min: parseInt(min)
    }
  }

  const progress = `{totalDateTime}` / `{remainingDateTime}`
  const hundred = 100 
const [selected, setSelected] = useState(null);

  return (
    <>
  {/* <div><b>{totalDateTime} Hours / {remainingDateTime} Left </b></div> */}
 {/* <ProgressBar  className="accordionSection" animated now={hundred } label={`${remainingDateTime} hours remain`}/> */}
    <Accordion >
    <Card >
    {/* <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Show Distance
      </Accordion.Toggle>
    </Card.Header> */}
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div className="distance">
        <div style={{ display: 'none'}}>{localStorage['distanceList'] = JSON.stringify(distanceList)}</div>
        {distanceList.map((item) =>(
          <div>
          <div className="durationDistance">
            <p>
           <ArrowRight color="royalblue" size={30} />{item.data.origin_addresses ? item.data.origin_addresses[0] : null}<br/>
            <ArrowRight  color="royalblue" size={30}/> {item.data.destination_addresses ? item.data.destination_addresses[0] : null}<br/>
             <Signpost  color="royalblue" size={30}/> {item.data.best_option}<br/>
            <Alarm  color="royalblue" size={30}/> {item.data[item.data.best_option][0]}<br/>
            <Binoculars color="royalblue" size={30}/> {item.data[item.data.best_option][1]}
            </p>
            
            </div>
            {item.data.best_option == "transfer/car" ? (
            <Button>
                      Buy Transfer
              </Button>): null}
          </div>
        ))}
      </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
      
      {/* <div className="distance">
        {distanceList.map((item) =>(
          <div>
          <div className="durationDistance">
            <p>
            from {item.data.origin_addresses ? item.data.origin_addresses[0] : null}<br/>
            to {item.data.destination_addresses ? item.data.destination_addresses[0] : null}<br/>
            by {item.data.best_option}<br/>
            time: {item.data[item.data.best_option][0]}<br/>
            distance: {item.data[item.data.best_option][1]}
            </p>
            </div>
            {item.data.best_option == "transfer/car" ? (
            <Button>
                      Buy Transfer
              </Button>): null}
          </div>
        ))}
      </div> */}
      <div className="products"selected={selected}
  setSelected={setSelected} >
      <h1>Tours</h1>
        {state.map((items) => (
        <div className="singleCard"
         key={items.activity.activity_id}
         onClick={() => setSelected(selected)}>
              <div className="carouselHeaderAndImage">
                  <div>
                      <h2>{items.activity.location}</h2>
                    <h4>{items.activity.name}</h4>
                  </div>
                  <div>
                    <img className="tourImage" src={items.activity.image} alt="Specialist" />
                  </div>
              </div>
              <div className="durationSection">
                    {/* Start Time:<p>{items.activity.start_time}</p>
                      End Time: <p>{items.activity.end_time}</p> */}
                       <p> Duration:{extractInteger(items.activity.duration,true)} Hour <Alarm  color="royalblue" size={30}/></p>
                       <p>Distance:{items.distance.toFixed(2)} km <Binoculars color="royalblue" size={30}/></p>
                  </div>
            <div>
                  <div className="contactDetails">
                </div>
                  <div className="contactDetails">
                  
                </div>
                </div>
                <div className="priceSection">
                <span className="priceInfo">${items.activity.buy_price}</span>
                  <Button onClick={() => addToCart(items.activity)}>
                      Add to Cart
                    </Button>
                </div>
              </div>
        ))} 
      </div>
     </Accordion>
    </>

  );
}