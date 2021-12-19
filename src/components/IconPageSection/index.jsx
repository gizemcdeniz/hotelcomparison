import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import search2 from "../../images/bestdeals.webp";
import book from "../../images/book.png";
import enjoy from "../../images/enjoy.jpg";
import "./index.scss";

const IconPageSection = () => {

  return (
    <div className="logoIntro">
      <Container>
        <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <Col xs={6} md={4}>
            <img
              className="easySearch"
              src={search2}
              alt="easySearch"
            />
           
          </Col>
          </Col>
          <Col className="d-flex justify-content-center">
          <Col xs={6} md={4}>
            <img
              className="easySearch"
              src={book}
              alt="easySearch"
            />
          </Col>
           {/* <span>Book It!</span> */}
          </Col>
          <Col className="d-flex justify-content-center">
          <Col xs={6} md={4}>
            <img
              className="easySearch"
              src={enjoy}
              alt="easySearch"
            />
          </Col>
          {/* <span>Enjoy It!</span> */}
          </Col>
        </Row>
      </Container>
      <div></div>
    </div>
  );
};

export default IconPageSection;
