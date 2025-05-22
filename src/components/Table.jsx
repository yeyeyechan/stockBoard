import List from "./List";
import "./Table.css";
const Table = () => {
  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th>순위</th>
          <th>종목명</th>
          <th>현재가</th>
          <th>등락률</th>
        </tr>
      </thead>
      <tbody>
        <List />
      </tbody>
    </table>
  );
};

export default Table;
