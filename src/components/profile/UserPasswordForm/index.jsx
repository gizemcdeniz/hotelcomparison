// import React from "react";
// import { Col } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Input from "../../form/SafePlaceInput";
// import "./index.scss";

// export default function UserPasswordForm({ register, errors }) {
//   const { t } = useTranslation();

//   return (
//     <Col xs={12} className="userPasswordSection">
//       <Input
//         type="password"
//         label={t("profile.userPassword.newPassword")}
//         placeholder={t("profile.userPassword.newPasswordPlaceholder")}
//         name="newPassword"
//         ref={register()}
//         errors={errors}
//       />

//       <Input
//         type="password"
//         label={t("profile.userPassword.confirmNewPassword")}
//         placeholder={t("profile.userPassword.confirmNewPasswordPlaceholder")}
//         name="confirmNewPassword"
//         ref={register()}
//         errors={errors}
//       />
//     </Col>
//   );
// }
