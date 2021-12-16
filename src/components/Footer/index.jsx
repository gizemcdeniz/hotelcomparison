import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo1.png";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import linkedInIcon from "../../images/icons/linkedInIcon.svg";
import instagramIcon from "../../images/icons/instagramIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mainFooter">
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col md={3} className="footerInfo">
            <h5>{t("footer.followUs")}</h5>
            <Row>
              <a href="https://www.twitter.com/">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedInIcon} alt="LinkedIn icon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
