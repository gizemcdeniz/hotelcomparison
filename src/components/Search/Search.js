import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Search.scss";
import logo from "../../images/logo1.png";
import { useHistory } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [checkInTerm, setCheckInTerm] = React.useState("");
  const [checkOutTerm, setCheckOutTerm] = React.useState("");
  const [adultTerm, setAdultTerm] = React.useState("");
  const [compareHotel1, setCompareHotel1] = React.useState("");
  const [compareHotel2, setCompareHotel2] = React.useState("");

  // const [searchResults, setSearchResults] = React.useState([]);
  const handleChangeSearch = event => {
    setSearchTerm(event.target.value);
  };
  const handleChangeCheckIn = event => {
    setCheckInTerm(event.target.value);
  };
  const handleChangeCheckOut = event => {
    setCheckOutTerm(event.target.value);
  };
  const handleChangeAdultTerm = event => {
    setAdultTerm(event.target.value);
  };

  const handleCompareHotel1 = event => {
    setCompareHotel1(event.target.value);
  };

  const handleCompareHotel2 = event => {
    setCompareHotel2(event.target.value);
  };

  let history = useHistory();
  const routeChange = () => {
    let path = "/listingHotels"
    history.push(path,  {params: {
      search: searchTerm,
      checkIn: checkInTerm,
      checkOut: checkOutTerm,
      adult: adultTerm
    }})
  }

  let history2 = useHistory();
  const routeChange2 = () => {
    let path = "/compareHotel"
    history.push(path,  {params: {
      compare1: compareHotel1,
      compare2: compareHotel2,
    }})
    console.log(compareHotel1)
    console.log(compareHotel2)
  }

  return (
    <div className="searchContainer">
      <div className="searchLogoSection">
        <div className="seturnLogoSearch"> <img className="logoSeturn" src={logo} alt="logo" /></div>
        <div className="enSevdigin"><h2>En sevdiğiniz rezervasyon sitelerindeki fırsatlar. Hepsi tek yerde.</h2>
          Şehir, belirli bir otel veya ünlü bir yer aramayı deneyin!</div>
      </div>

      <div className="searchFirst">
        <input type="text"
          value={searchTerm}
          onChange={handleChangeSearch}
          placeholder="Otel veya Şehir Ara" />

        <input type="date" value={checkInTerm}
          onChange={handleChangeCheckIn}
          id="birthday" name="Giriş" placeholder="Giriş" />

        <input value={checkOutTerm}
          onChange={handleChangeCheckOut} type="date" id="birthday" name="Giriş" />


        <select value={adultTerm}
          onChange={handleChangeAdultTerm} class="form-select" aria-label="Default select example">
          <option selected>Yetişkin</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Çocuk</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
          <button onClick={routeChange} className="submitButton" type="button">
            En İyi Fiyatı Bul
          </button>
        {/* <Link to="/tours">
          <button onClick={this.handleConsole} clasName="submitButton" type="button">
            Find Best Deals
          </button>
        </Link> */}
      </div>
      <span className="orClass">Ya Da</span>
      <div className="searchSecond">
        {/* <Link to="/tours-guide">
          <button  clasName="submitButton" type="button">
            FROM NOW!
          </button>
        </Link> */}
        <input type="text" onChange={handleCompareHotel1} placeholder="Otel Karşılaştır" />
        <input type="text" onChange={handleCompareHotel2}  placeholder="Otel Karşılaştır" />
        <button onClick={routeChange2} className="submitButton" type="button">
          Otel Karşılaştır
        </button>
      </div>
    </div>
  );
  
}


export default Search;
