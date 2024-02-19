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
  { username: "Albar Khan", date: "23", year: 2024, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2024, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2024, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2024, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2024, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2021, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2021, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2021, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2022, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2021, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2023, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2022, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2022, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2022, amount: 786000 },
  { username: "Albar Khan", date: "23", year: 2021, amount: 786000 },
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
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
          <span>Slaes</span>
          <span>Purchaes</span>
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

function Body() {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="list">
          <DateBar />
          <Table />
        </div>
        <div className="inputForm">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="date"
          className="name"
          placeholder="Name"
          min={getCurrentDate()}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input type="number" className="name" placeholder="Amount "></input>
      </div>
    </form>
  );
}

function DateBar() {
  let years = new Set();
  data.forEach((element) => {
    years.add(element.year);
  });
  // console.log(years);
  return (
    <div className="date-bar">
      <div className="select-options">
        <select>
          {[...years].map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select>
          {months.map((month, index) => (
            <option>{month}</option>
          ))}
        </select>
      </div>
      <div>
        <span className="status">January 2024 : $898989898989</span>
      </div>
    </div>
  );
}

function Table() {
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
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>Albar Khan</td>
              <td>₹{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
