// import React from "react";
// import { Col } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import i18n from "i18next";
// import COUNTRIES_EN from "./countries-en.json";
// import COUNTRIES_AR from "./countries-ar.json";
// import Input from "../../form/SafePlaceInput";
// import "./index.scss";

// export default function UserDetail({ register }) {
//   const { t } = useTranslation();
//   const COUNTRIES = i18n.language === "ar" ? COUNTRIES_AR : COUNTRIES_EN;

//   return (
//     <Col xs={12} className="userDetailSection">
//       <div className="formInputGroup">
//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.firstName.placeholder")}
//           name="firstName"
//           ref={register()}
//           label={t("profile.userDetail.firstName.label")}
//         />

//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.lastName.placeholder")}
//           name="lastName"
//           ref={register()}
//           label={t("profile.userDetail.lastName.label")}
//         />
//       </div>

//       <div className="formInputGroup">
//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.nationality.placeholder")}
//           name="nationality"
//           label={t("profile.userDetail.nationality.label")}
//           ref={register()}
//         />

//         <Input
//           type="tel"
//           placeholder={t("profile.userDetail.phoneNumber.placeholder")}
//           name="phoneNumber"
//           label={t("profile.userDetail.phoneNumber.label")}
//           ref={register()}
//         />
//       </div>

//       <div className="formInputGroup">
//         <div className="formInput">
//           <label htmlFor="sex">
//             {t("profile.userDetail.sex.label")}
//             <select name="sex" id="sex" ref={register()}>
//               <option value="female">{t("profile.userDetail.sex.male")}</option>
//               <option value="male">{t("profile.userDetail.sex.female")}</option>
//             </select>
//           </label>
//         </div>

//         <Input
//           type="date"
//           name="birthdate"
//           id="birthdate"
//           label={t("profile.userDetail.birthdate.label")}
//           ref={register()}
//         />
//       </div>

//       <Input
//         type="text"
//         placeholder={t("profile.userDetail.address.placeholder")}
//         name="address"
//         label={t("profile.userDetail.address.label")}
//         ref={register()}
//       />

//       <div className="formInputGroup">
//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.city.placeholder")}
//           name="city"
//           label={t("profile.userDetail.city.label")}
//           ref={register()}
//         />

//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.state.placeholder")}
//           name="state"
//           label={t("profile.userDetail.state.label")}
//           ref={register()}
//         />
//       </div>

//       <div className="formInputGroup">
//         <Input
//           type="text"
//           placeholder={t("profile.userDetail.zipCode.placeholder")}
//           name="zipCode"
//           label={t("profile.userDetail.zipCode.label")}
//           ref={register()}
//         />

//         <div className="formInput">
//           <label htmlFor="country">
//             {t("profile.userDetail.country.label")}
//             <select name="countryCode" id="country" ref={register()}>
//               <option value="">
//                 {t("profile.userDetail.country.chooseCountry")}
//               </option>
//               {COUNTRIES.map((country) => (
//                 <option key={country.id} value={country.alpha2}>
//                   {country.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//       </div>
//     </Col>
//   );
// }
