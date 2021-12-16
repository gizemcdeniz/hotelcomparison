import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import HotelListingPage from "./components/HotelListingPage";
import AboutUsPage from "./containers/AboutUsPage";
import ChatBotMessages from "./components/ChatBotMessages";
import ContactUsPage from "./containers/ContactUsPage";
import { AuthProvider } from "./auth/Authentication";
import CompareHotels from "./components/CompareHotels";
// import Geo from "./containers/Geo";
// import { Container } from "react-bootstrap";

// import Geo from "./containers/Geo";
// import { Container } from "react-bootstrap";

  const stripePromise = loadStripe(
  "pk_test_51I2c1yCONKI4eHC69YRPcKbTdm5CwsctIjQUI2BQ0FWn205SgAaVVH2UT1c9x48FSpWStAH46KH8Ek4nig23cJzu001e403O7g"
);
  
const App = () => (

  <AuthProvider>
    <Router>
    <Elements stripe={stripePromise}>
      {/* <Geo/> */}
        <MainNavbar />
        <ChatBotMessages />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/about">
            <AboutUsPage />
          </Route>
          <Route exact path="/listingHotels">
            <HotelListingPage />
          </Route>
          <Route exact path="/compareHotel">
            <CompareHotels />
          </Route>
          <Route exact path="/contact">
            <ContactUsPage />
          </Route>
        </Switch>
         </Elements>
    </Router>
    <Footer />
  </AuthProvider>
);

export default App;
