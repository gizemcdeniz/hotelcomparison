import React from 'react';
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'


const Review = (bookingId) => {

  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getReviewData() {
      if (bookingId.booking) {
        const response = await fetch("https://seturn-api.herokuapp.com/api/hotel-review/" + bookingId.booking);
        const data2 = await response.json();
        console.log(data2);
        setReview(data2);
        setLoading(false)
      }
    }
    getReviewData()
  }, [])

  return <>

    {loading ? (
      <div>
        <Spinner
          style={{ marginBottom: '27', justifyContent: 'space-evenly' }}
          animation="border"
          variant="danger"
          size="xl"
        />
      </div>
    ) :
      <Container fluid="md">
        {Object.values(review['review']).map(item => (
          <div>
            <h6><b>Misafir: </b>{item['author']}</h6>
            <ul type="square">
              <li><b>AvantajlarÄ±: </b>{item['pros']}</li>
              <li><b>DezavantajlarÄ±: </b> {item['cons']}</li>
              <li><b>Ortalama Puan: </b>{item['average_score']}</li>
            </ul>
          </div>
        ))}
      </Container>
    }
  </>

}

export default Review;
