import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import searchIcon from "./images/searchIcon.svg";
import "./index.scss";

// This component takes in a function 'handleSearch' as a props, which handles search based on a keyword provided by user
const SearchBar = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <input
            placeholder="Search"
            className="mr-sm-2 searchBarInput"
            onChange={(e) => handleInputChange(e)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(e, keyword);
                setKeyword("");
              }
            }}
          />
          <img
            className="searchIcon"
            src={searchIcon}
            alt="Search Icon"
            onClick={(e) => {
              handleSearch(e, keyword);
              setKeyword("");
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
