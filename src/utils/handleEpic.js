import { Linking } from "react-native";

export const handleEpic = (epicURL) => {
  // const updatedEpicURL = epicURL.replace(
  //   /\/api\/FHIR\/R4\/$/,
  //   "/oauth2/authorize"
  // );
  const clientId = "3fef3166-7064-406f-b6e9-270f932de30b";
  const redirectUri = "http://localhost:3000/import";
  const scope =
    "PATIENT.READ PATIENT.SEARCH OBSERVATION.READ OBSERVATION.SEARCH";
  const responseType = "code";
  const aud = "https://epicproxy-pub.et1089.epichosted.com";

  // Use the updatedEpicURL here
  const fullAuthUrl = `${epicURL}?client_id=3fef3166-7064-406f-b6e9-270f932de30b&scope=PATIENT.READ%20PATIENT.SEARCH%20OBSERVATION.READ%20OBSERVATION.SEARCH&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fimport`;

  // Open the external website in the default browser
  Linking.openURL(fullAuthUrl).catch((err) => console.error("Error:", err));
};
