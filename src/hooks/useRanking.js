import { useEffect, useReducer } from "react";
import getFluctuation from "../api/ranking";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return [...action.data];
  }
};
export const useFlucutationRankingData = (param) => {
  const [fluctuationData, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFluctuation(param);

        dispatch({
          type: "UPDATE",
          data: response.output,
        });
      } catch (err) {
        console.log(err); // 에러 설정
      } finally {
        console.log(false); // 로딩 종료
      }
    };

    fetchData();
  }, [param]);
  return { fluctuationData };
};
