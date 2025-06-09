import { useEffect, useReducer, useState } from "react";
import getFluctuation from "../api/ranking";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return [...action.data];
  }
};
export const useFlucutationRankingData = (param) => {
  const [fluctuationData, dispatch] = useReducer(reducer, []);
  const [updateTime, updatedAt] = useState("");

  let isMounted = true;

  const fetchData = async () => {
    try {
      const response = await getFluctuation(param);
      if (isMounted) {
        dispatch({
          type: "UPDATE",
          data: response.output,
        });
        let date = new Date();

        updatedAt(date.toLocaleDateString() + date.toLocaleTimeString());
      }
    } catch (err) {
      console.log(err); // 에러 설정
    } finally {
      console.log(false); // 로딩 종료
    }
  };

  useEffect(() => {
    let isMounted = true;

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); // 5초마다 갱신

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);
  return { fluctuationData, updateTime, refetch: fetchData };
};
