import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SignUpForm from "../SignUpForm";
import Boring from "../../images/boring.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import firebase from "../../firebaseConfig";
import { setFirebaseProvider } from "../../utils/authHelpers";
import "./index.scss";

export default function SignUp() {
  const history = useHistory();
  const { t } = useTranslation();

  const signUpFailed = (error) => {
    alert(error);
  };

  const handleSignUp = React.useCallback(
    async (data) => {
      const { email, password } = data;

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          return error.code;
        }
        signUpFailed(error);
      }
      return "succeed";
    },
    [history]
  );

  const handleSignUpWithProvider = React.useCallback(
    async (providerName) => {
      const provider = setFirebaseProvider(providerName);

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          history.push("/");
        })
        .catch(function (error) {
          // Handle errors here.
          signUpFailed(error);
        });
    },
    [history]
  );

  return (
    <Container fluid="md" className="signUpSection">
      <Row>
        <Col className="signUpImg" md={6} xs={12}>
          <img src={Boring} alt="Two women support each other" />
        </Col>
        <Col className="signUpForm" md={6} xs={12}>
          <h2>{t("signUp.header")}</h2>
          <div>
            <span className="hyphen" />
            <h4>{t("signUp.signUpWith")}</h4>
          </div>
          <ul className="signUpIcons">
            <li className="signUpIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("twitter")}>
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
            <li className="signUpIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("facebook")}>
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signUpIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("google")}>
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <p className="text-center">
            <hr className="divider" />
            <span className="dividerContent">{t("signUp.or")}</span>
          </p>

          <SignUpForm submit={handleSignUp} />
        </Col>
      </Row>
    </Container>
  );
}
