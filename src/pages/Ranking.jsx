import { useMemo, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import "./Ranking.css";
import { useFlucutationRankingData } from "../hooks/useRanking";
import Refresh from "../components/refresh";

const Ranking = () => {
  const param = useMemo(
    () => ({
      fid_rsfl_rate2: "",
      fid_cond_mrkt_div_code: "J",
      fid_cond_scr_div_code: "20170",
      fid_input_iscd: "0000",
      fid_rank_sort_cls_code: "0",
      fid_input_cnt_1: "0",
      fid_prc_cls_code: "1",
      fid_input_price_1: "",
      fid_input_price_2: "",
      fid_vol_cnt: "",
      fid_trgt_cls_code: "0",
      fid_trgt_exls_cls_code: "0",
      fid_div_cls_code: "0",
      fid_rsfl_rate1: "",
    }),
    []
  );
  const { fluctuationData, refetch } = useFlucutationRankingData(param);

  const title = "📈 실시간 주식 급등 종목";

  const columns = [
    { label: "순위", key: "rank" },
    { label: "종목명", key: "name" },
    { label: "현재가", key: "price" },
    { label: "등락률", key: "change" },
  ];
  const renderItems = (item) => (
    <tr key={item.data_rank}>
      <td>{item.data_rank}</td>
      <td>{item.hts_kor_isnm}</td>
      <td>{item.stck_prpr}원</td>
      <td
        className={
          Number(item.prdy_ctrt) > 0
            ? "up"
            : Number(item.prdy_ctrt) < 0
            ? "down"
            : ""
        }
      >
        {Number(item.prdy_ctrt) > 0
          ? "▲"
          : Number(item.prdy_ctrt) < 0
          ? "▼"
          : ""}
        {item.prdy_ctrt}%
      </td>
    </tr>
  );
  return (
    <div>
      <Header title={title} />
      <div className="refresh-container">
        <Refresh onRefresh={refetch} />
      </div>
      <Table
        columns={columns}
        listData={fluctuationData}
        renderItems={renderItems}
      />
    </div>
  );
};
export default Ranking;
