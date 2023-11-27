export const getElastic = (term) => {
  return fetch(
    `http://ad63e092c240c472caeed7252bf4a8fc-1435916204.us-east-1.elb.amazonaws.com:8081/medicalProviders?like=${term}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
