import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

//ignore prettier
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = [
  {
    username: "Albar Khan",
    date: "1",
    month: "March",
    year: 2024,
    type: "sales",
    amount: 786000,
  },
  {
    username: "Sufiyan shaikh",
    date: "2",
    month: "March",
    year: 2024,
    type: "purchase",
    amount: 786000,
  },
  {
    username: "Habib",
    date: "2",
    month: "March",
    year: 2024,
    type: "purchase",
    amount: 786000,
  },
  {
    username: "Albar Khan",
    date: "2",
    month: "March",
    type: "purchase",
    year: 2023,
    amount: 786000,
  },
];
export default function App() {
  const [type, setType] = useState("");
  return (
    <div className="App">
      <Header setType={setType} />
      <Body type={type} setType={setType} />
    </div>
  );
}

function Header({ setType }) {
  const [responsive, setResponsive] = useState(false);
  return (
    <header className="header">
      <nav>
        <span className="logo">
          <img
            className="logo-img"
            src="https://cdn.dribbble.com/users/2407143/screenshots/10717420/media/60aab191ea1165e667a9f2edd6375105.png"
            alt="logo"
          ></img>
          Revenue Radar
        </span>
        <div
          className={!responsive ? "types-header" : "types-header-responsive"}
        >
          <span
            onClick={(e) => {
              setType("sales");
            }}
          >
            sales
          </span>
          <span
            onClick={(e) => {
              setType("purchase");
            }}
          >
            purchase
          </span>
        </div>
        <span className="icon">
          <i
            className="fa-solid fa-bars"
            onClick={() => setResponsive(!responsive)}
          ></i>
        </span>
      </nav>
    </header>
  );
}

function Body({ type, setType }) {
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

function Form({ copyData, setCopyData, type, setType }) {
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
        <input
          className="name"
          placeholder="Name"
          value={username}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="date"
          className="name"
          placeholder="Name"
          min={getCurrentDate()}
          onChange={(e) => {
            hanldeDateChange(e);
          }}
        ></input>
        <input
          type="number"
          className="name"
          placeholder="Amount "
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
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

function DateBar({
  setSelectYear,
  setSelectMonth,
  copyData,
  selectMonth,
  selectYear,
  type,
}) {
  let years = new Set();
  copyData.forEach((element) => {
    years.add(element.year);
  });

  let summonth = 0;
  let sumyear = 0;
  copyData.forEach((data, index) => {
    if (
      data.year === selectYear &&
      data.month === selectMonth &&
      data.type === type
    ) {
      summonth += Number(data.amount);
    }
  });
  copyData.forEach((data, index) => {
    if (data.year === selectYear && data.type === type) {
      sumyear += Number(data.amount);
    }
  });

  // console.log(years);
  return (
    <div className="date-bar">
      <div className="select-options">
        <select onChange={(e) => setSelectYear(Number(e.target.value))}>
          {[...years].map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select
          value={selectMonth}
          onChange={(e) => setSelectMonth(e.target.value)}
        >
          {months.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
      </div>
      <div>
        <span className="status">
          {selectYear} : {sumyear}
        </span>
        <span className="status">
          {selectMonth} {selectYear} : ${summonth}
        </span>
      </div>
    </div>
  );
}

function Table({ selectYear, selectMonth, copyData, type }) {
  return (
    <div className="table-parent">
      <table className="table">
        <thead>
          <tr>
            <th className="date-column">Date</th>
            <th className="name-column">Name</th>
            <th className="amount-column">Amount</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {copyData.map((data, index) =>
            data.year === selectYear &&
            data.month === selectMonth &&
            data.type === type ? (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.username}</td>
                <td>₹{data.amount}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
