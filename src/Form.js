import { useState } from "react";
import { months } from "./App";
export function Form({ copyData, setCopyData, type, setType }) {
  const [username, setName] = useState("");
  const [date, setdate] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [amount, setAmount] = useState(0);

  function hanldeDateChange(e) {
    const selectedDate = new Date(e.target.value);
    setdate(selectedDate.getDate());
    setmonth(selectedDate.getMonth() + 1);
    setyear(selectedDate.getFullYear());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !date || !month || !year || !amount) {
      alert("invalid input");
      return;
    }

    // console.log(String(months[month - 1]));
    const newEntry = {
      username,
      date,
      month: months[month - 1],
      year,
      amount,
      type,
    };

    // data.push(newEntry);
    setCopyData((copyData) => [...copyData, newEntry]);
    setName("");
    setAmount(0);
  }
  // console.log(typeof month);
  function getCurrentDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
  }

  return (
    <form className="form">
      <div>
        <Input
          type={"text"}
          placeholder={"Name"}
          value={username}
          onChange={setName}
        />
        <input
          type="date"
          className="name"
          placeholder="Name"
          min={getCurrentDate()}
          onChange={(e) => {
            hanldeDateChange(e);
          }}
        ></input>
        <Input
          type={"number"}
          placeholder={"Amount"}
          value={amount}
          onChange={setAmount}
        />
        <select
          className="select-option"
          onChange={(e) => setType(e.target.value)}
        >
          <option>sales</option>
          <option>purchase</option>
        </select>
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function Input({ type, placeholder, value, onChange, min }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></input>
  );
}
