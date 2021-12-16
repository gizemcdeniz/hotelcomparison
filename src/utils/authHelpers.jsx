import firebase from "../firebaseConfig";

export const EMAIL_NOT_FOUND_ERROR = "auth.emailNotFound";
export const EMAIL_ALREADY_TAKEN_ERROR = "auth.emailAlreadyTaken";
export const PASSWORD_INCORRECT_ERROR = "auth.incorrectPassword";

export function setFirebaseProvider(providerName) {
  let providerSet;
  switch (providerName) {
    case "google":
      providerSet = new firebase.auth.GoogleAuthProvider();
      break;
    case "facebook":
      providerSet = new firebase.auth.FacebookAuthProvider();
      break;
    case "twitter":
      providerSet = new firebase.auth.TwitterAuthProvider();
      break;
    default:
      throw new Error("provider not specified!");
  }

  return providerSet;
}
