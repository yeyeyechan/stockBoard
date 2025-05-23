import getFluctuation from "../api/ranking";
import Header from "../components/Header";
import Table from "../components/Table";

const Ranking = () => {
  const headerProps = { title: "📈 실시간 주식 랭킹" };
  const fluctuationData = getFluctuation().output || [];
  //console.log(fluctuationData);
  const talbleHeads = ["순위", "종목명", "현재가", "등락률"];
  const listData = fluctuationData.map((ele) => (
    <tr>
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
