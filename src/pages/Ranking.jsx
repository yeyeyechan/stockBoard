import { useMemo, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

import { useFlucutationRankingData } from "../hooks/useRanking";

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
  const { fluctuationData, updateTime } = useFlucutationRankingData(param);
  const headerProps = { title: "📈 실시간 주식 랭킹" };

  const talbleHeads = ["순위", "종목명", "현재가", "등락률"];
  const listData = fluctuationData.map((ele) => (
    <tr key={ele.data_rank}>
      <td>{ele.data_rank}</td>
      <td>{ele.hts_kor_isnm}</td>
      <td>{ele.stck_prpr}원</td>
      <td
        className={
          Number(ele.prdy_ctrt) > 0
            ? "up"
            : Number(ele.prdy_ctrt) < 0
            ? "down"
            : ""
        }
      >
        {Number(ele.prdy_ctrt) > 0 ? "▲" : Number(ele.prdy_ctrt) < 0 ? "▼" : ""}
        {ele.prdy_ctrt}%
      </td>
    </tr>
  ));
  console.log(listData);
  return (
    <div>
      <Header headerProps={headerProps} />
      <Table talbleHeads={talbleHeads} listData={listData} />
    </div>
  );
};
export default Ranking;
