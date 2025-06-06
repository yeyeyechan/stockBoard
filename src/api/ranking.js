import makeApiCall from "./axiosInstance";
import apiRoutes from "./apiRoutes";

const { ranking } = apiRoutes();
const getFluctuation = async (param = {}) => {
  const data = await makeApiCall({
    param: param,
    url: `${import.meta.env.VITE_LOCAL_STK_NODE_HOST}${ranking.fluctuation}`,
    method: "POST",
  });
  return data;
};

export default getFluctuation;
