import { useState } from "react";
import List from "./List";
import "./Table.css";
const Table = ({ columns, listData, renderItems }) => {
  return (
    <table className="stock-table">
      <thead>
        <tr>
          {columns.map((ele) => (
            <th key={ele.key}>{ele.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <List listData={listData} renderItems={renderItems} />
      </tbody>
    </table>
  );
};

export default Table;
