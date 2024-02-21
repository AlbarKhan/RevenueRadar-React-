import { useState } from "react";
import { data } from "./App";
import { Form } from "./Form";
import { Table } from "./Table";
import { DateBar } from "./DateBar";
export function Body({ type, setType }) {
  const [copydata, setCopyData] = useState(data);
  const [selectyear, setSelectYear] = useState(2024);
  const [selectMonth, setSelectMonth] = useState("March");
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="list">
          <DateBar
            setSelectYear={setSelectYear}
            setSelectMonth={setSelectMonth}
            selectMonth={selectMonth}
            selectYear={selectyear}
            copyData={copydata}
            type={type}
          />
          <Table
            selectYear={selectyear}
            selectMonth={selectMonth}
            copyData={copydata}
            type={type}
          />
        </div>
        <div className="inputForm">
          <Form
            copydata={copydata}
            setCopyData={setCopyData}
            type={type}
            setType={setType}
          />
        </div>
      </div>
    </div>
  );
}
