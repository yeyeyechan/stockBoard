import List from "./List";
import "./Table.css";
const Table = ({ talbleHeads, listData }) => {
  return (
    <table className="stock-table">
      <thead>
        <tr>
          {talbleHeads.map((ele) => (
            <th>{ele}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <List listData={listData} />
      </tbody>
    </table>
  );
};

export default Table;
