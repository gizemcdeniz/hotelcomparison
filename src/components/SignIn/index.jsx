import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SignInForm from "../SignInForm";
import Boring from "../../images/boring.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import { setFirebaseProvider } from "../../utils/authHelpers";
import { NavLink } from "react-router-dom";
import firebase from "../../firebaseConfig";

import "./index.scss";

export default function SignIn() {
  const { t } = useTranslation();
  const history = useHistory();

  const signInFailed = (error) => {
    alert(error);
  };

  const handleSignIn = React.useCallback(
    async (data) => {
      const { email, password } = data;

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          return error.code;
        }
        signInFailed(error);
      }
      return "succeed";
    },
    [history]
  );

  const handleSignUpWithProvider = React.useCallback(
    async (providerName) => {
      const firebaseProvider = setFirebaseProvider(providerName);

      firebase
        .auth()
        .signInWithPopup(firebaseProvider)
        .then(function (result) {
          history.push("/");
        })
        .catch(function (error) {
          // Handle errors here.
          signInFailed(error);
        });
    },
    [history]
  );

  return (
    <Container fluid="md" className="signInSection">
      <Row>
        <Col className="signInImg" md={6} xs={12}>
          <img
            src={Boring}
            alt="Women Group Hugging Together"
          />
        </Col>
        <Col className="signInForm" md={6} xs={12}>
          <h2>{t("signIn.header")}</h2>
          <div>
            <span className="hyphen" />
            <h4>{t("signIn.signInWith")}</h4>
          </div>
          <ul className="signInIcons">
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("twitter")}>
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("facebook")}>
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("google")}>
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <p className="text-center">
            <hr className="divider" />
            <span className="dividerContent">{t("signIn.or")}</span>
          </p>
          <SignInForm submit={handleSignIn} />

          <p>
            {t("signIn.newHere")}{" "}
            <NavLink to="/signup">{t("signIn.createAccount")}</NavLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
