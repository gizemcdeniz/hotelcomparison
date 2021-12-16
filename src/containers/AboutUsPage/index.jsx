import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";
import logoabout from "./logoabout.png"

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="aboutUsPage">
      <h2>{t("aboutUsPage.header")}</h2>
      <p>{t("aboutUsPage.bodyText")}</p>
      <img className="logoAbout" src={logoabout} alt="about"/>
    </Container>
  );
};

export default AboutPage;
