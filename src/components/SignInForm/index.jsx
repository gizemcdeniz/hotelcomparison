import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useTranslation } from "react-i18next";
import InputErrorMessage from "../InputErrorMessage";
import { getErrorClass } from "../../utils/formHelpers";
import {
  EMAIL_NOT_FOUND_ERROR,
  PASSWORD_INCORRECT_ERROR,
} from "../../utils/authHelpers";

import "./index.scss";

export default function SignInForm({ submit }) {
  const { t } = useTranslation();

  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: ["com", "net", "edu"] } })
      .messages({
        "string.empty": t("validationMessage.emptyEmail"),
        "string.email": t("validationMessage.emailNotValid"),
      }),
    password: Joi.string()
      .required()
      .min(8)
      .max(64)
      .strict()
      .messages({
        "string.empty": t("validationMessage.emptyPassword"),
        "string.min": t("validationMessage.passwordMin"),
        "string.max": t("validationMessage.passwordMax"),
      }),
  });

  const { register, handleSubmit, errors, reset, setError } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data) => {
    const status = await submit(data);
    switch (status) {
      case "auth/wrong-password":
        setError("password", {
          type: PASSWORD_INCORRECT_ERROR,
          message: t("signIn.validationMessage.incorrectPassword"),
        });
        break;
      case "auth/user-not-found":
        setError("email", {
          type: EMAIL_NOT_FOUND_ERROR,
          message: t("signIn.validationMessage.emailNotFound"),
        });
        break;
      case "succeed":
        reset();
        break;
      default:
        reset();
    }
  };

  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <input
            className={getErrorClass(errors.email)}
            type="email"
            placeholder={t("signIn.form.yourEmail")}
            name="email"
            aria-label="email"
            ref={register()}
          />
          <InputErrorMessage error={errors.email} />
        </div>

        <div className="formInput">
          <input
            className={getErrorClass(errors.password)}
            type="password"
            placeholder={t("signIn.form.yourPassword")}
            name="password"
            aria-label="password"
            ref={register()}
          />
          <InputErrorMessage error={errors.password} />
        </div>

        <div className="formInput">
          <div className="rememberMe">
            <div>
              <input
                type="checkbox"
                id="remembered"
                name="remembered"
                value="toBeRemembered"
              />
            </div>
            <div>
              <label htmlFor="remembered">{t("signIn.form.rememberMe")}</label>
            </div>
          </div>
        </div>

        <button type="submit" className="submitBtn">
          {t("signIn.form.signIn")}
        </button>
      </form>
    </div>
  );
}
