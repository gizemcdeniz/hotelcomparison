import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import Search from "../Search/Search.js"

const MainPage = () => {


  return (
    <Container fluid className="main-container">
      <Row>
        <Col
          className="main-text"
          md={{ span: 12, order: "first" }}
          xs={{ span: 12, order: "last" }}
        >
          <div>
          <Search/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
