export const apiSubmitOrder = async (body, onSuccess) => {
  const mockedEndpointUrl = "https://pizza-app-v1.free.beeceptor.com";
  //   const mockedEndpointUrl = "https://pizza-app-backup.free.beeceptor.com" - //backup endpoint if the main one fails

  const options = {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(mockedEndpointUrl, options);
    const data = await response;

    console.log("Request Body:", body);
    onSuccess();
    return data;
  } catch (err) {
    console.error(err);
  }
};
