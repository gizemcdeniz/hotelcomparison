import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Contact from "../../components/Contact";
import "./index.scss";

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="contactUsPage">
      <h2>{t("contactUs.contactUsPage.header")}</h2>
      <h6>{t("contactUs.contactUsPage.subHeader")}</h6>
      <Contact />
    </Container>
  );
};

export default ContactUsPage;
