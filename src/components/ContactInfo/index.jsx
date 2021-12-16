/* eslint-disable max-len */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import locationIcon from "../../images/icons/locationIcon.svg";
import phoneIcon from "../../images/icons/phoneIcon.svg";
import mailIcon from "../../images/icons/mailIcon.svg";
import "./index.scss";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <Col className="contactInfo">
      <h2>{t("contactUs.contactUsInfo.header")}</h2>
      <p>{t("contactUs.contactUsInfo.description")}</p>
      <Row className="contactMethods">
        <Col>
          <img className="contactIcon" src={locationIcon} alt="Location icon" />
          <p>{t("contactUs.contactUsInfo.location")}</p>
        </Col>
        <Col>
          <img className="contactIcon" src={phoneIcon} alt="Phone icon" />
          <p>{t("contactUs.contactUsInfo.phone")}</p>
        </Col>
        <Col>
          <img className="contactIcon" src={mailIcon} alt="Contact icon" />
          <p>{t("contactUs.contactUsInfo.email")}</p>
        </Col>
      </Row>
    </Col>
  );
}
