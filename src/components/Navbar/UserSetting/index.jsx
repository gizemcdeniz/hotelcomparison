import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import defaultProfileImage from "../../../images/defaultProfileImage.png";
import firebase from "../../../firebaseConfig";
import "./index.scss";

export default function UserSetting({ currentUser }) {
  const { t } = useTranslation();

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="userSetting">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          split="true"
          as="a"
        >
          <img
            src={currentUser.photoURL || defaultProfileImage}
            alt={t("navbar.userSettings.userIcon")}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile">
            {t("navbar.userSettings.profile")}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>
            {t("navbar.userSettings.signOut")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
