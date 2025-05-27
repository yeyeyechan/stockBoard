import axios from "axios";

const makeApiCall = async ({ url, param, callback, method, headers }) => {
  const config = {
    method: method,
    data: param,
    url: url,
    headers: headers || {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios
      .request(config)
      .then((response) => {
        if (typeof callback === "function") {
          callback(response);
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return response.data;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default makeApiCall;
