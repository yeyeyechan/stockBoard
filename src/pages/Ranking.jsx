import Header from "../components/Header";
import Table from "../components/Table";

const Ranking = () => {
  const HeaderProps = { title: "📈 실시간 주식 랭킹" };
  return (
    <div>
      <Header HeaderProps={{ HeaderProps }} />
      <Table />
    </div>
  );
};
export default Ranking;
