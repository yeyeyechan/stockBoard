import axios from "axios";

const makeApiCall = async ({ url, param, callback, method }) => {
  const config = {
    method: method,
    data: param,
    url: url,
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
