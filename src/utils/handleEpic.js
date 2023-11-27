import { Linking } from "react-native";

export const handleEpic = (epicURL) => {
  const updatedEpicURL = epicURL.replace(
    /\/api\/FHIR\/R4\/$/,
    "/oauth2/authorize"
  );
  const clientId = "3fef3166-7064-406f-b6e9-270f932de30b";
  const redirectUri = "http://localhost:3000/import";
  const scope =
    "PATIENT.READ PATIENT.SEARCH OBSERVATION.READ OBSERVATION.SEARCH";
  const responseType = "code";
  const aud = "https://epicproxy-pub.et1089.epichosted.com";

  // Use the updatedEpicURL here
  const fullAuthUrl = `${updatedEpicURL}?client_id=${clientId}&scope=${scope}&response_type=${responseType}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}`;

  // Open the external website in the default browser
  Linking.openURL(fullAuthUrl);
};
