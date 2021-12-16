import React, { useState } from "react";
import { Container, Row, Modal, Col } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function LeaveMessage() {
  const { t } = useTranslation();
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);

  return (
    <section className="contactSection">
      <Container className="contactContainer">
        <Row>
          <Col md={6} sm={12}>
            <ContactInfo />
          </Col>
          <Col>
            <ContactForm handleShow={handleShow} />
            <Modal show={isShown} onHide={handleClose}>
              <Modal.Body>
                <button type="button" className="close" onClick={handleClose}>
                  <span aria-hidden="true">×</span>
                </button>
                <div className="contactFormModalBody">
                  <p>{t("contactUs.contactUsModal.message")}</p>
                </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
