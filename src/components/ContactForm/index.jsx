import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputErrorMessage from "../InputErrorMessage";
import firebase from "../../firebaseConfig";
import { getErrorClass } from "../../utils/formHelpers";
import "./index.scss";

export default function ContactForm({ handleShow }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    handleShow();
    const newMessage = firebase
      .firestore()
      .collection("contactUsMessages")
      .doc();
    newMessage.set({
      name: data.fullName,
      email: data.email,
      message: data.messageContent,
    });
    reset();
  };

  return (
    <Container fluid className="contactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <label htmlFor="fullName">
            {t("contactUs.contactUsForm.name.label")}
            <input
              className={getErrorClass(errors.fullName)}
              type="text"
              placeholder={t("contactUs.contactUsForm.name.placeholder")}
              name="fullName"
              id="fullName"
              aria-label="Full Name"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="email">
            {t("contactUs.contactUsForm.email.label")}
            <input
              className={getErrorClass(errors.email)}
              type="email"
              placeholder={t("contactUs.contactUsForm.email.placeholder")}
              name="email"
              id="email"
              aria-label="Email address"
              ref={register({
                required: {
                  value: true,
                  message: t("contactUs.contactUsForm.email.error.required"),
                },
                // TODO: intall joi and use it for email validation
              })}
            />
            <InputErrorMessage error={errors.email} />
          </label>
        </div>
        <button type="submit" className="submitBtn">
          {t("contactUs.contactUsForm.submitBtn")}
        </button>
      </form>
    </Container>
  );
}
