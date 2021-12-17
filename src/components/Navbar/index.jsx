import React from "react";
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./index.scss";
import logo from "../../images/logo1.png";
import { useTranslation } from "react-i18next";
import languageIcon from "../../images/icons/language.svg";
import { AuthContext } from "../../auth/Authentication";
import { NavLink, Link } from "react-router-dom";
import SignInUpButtons from "./SignInUpButtons";


const LANG_SPECS = [
  {
    code: "tr",
    name: "Türkçe",
  },
  {
    code: "en",
    name: "English",
  },
];

const MainNavbar = () => {
  const currentUser = React.useContext(AuthContext);

  const [t, i18n] = useTranslation();

  return (
    <Navbar expand="lg" collapseOnSelect className="mainNavbar">
      <Container>
        <Navbar.Brand href="/">
          <h4>Anasayfa</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="navLink" to="/about">
              {t("navbar.headers.header0")}
            </NavLink>         
            <NavLink className="navLink" to="/contact">
             {t("navbar.headers.header2")}
            </NavLink>
            <DropdownButton
              alignRight
              variant="none"
              id="dropdown-button"
              className="dropdown"
              title={<img src={languageIcon} alt="Language icon" />}
            >
              {LANG_SPECS.map((lang) => {
                return (
                  <Dropdown.Item
                    className="dropdownButton"
                    as="button"
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                    }}
                  >
                    {lang.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            {/* <li><Link to="/cart"><ShoppingCartOutlined /></Link></li> */}
             <SignInUpButtons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
