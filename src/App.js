import { useState } from "react";

const data = [
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
  { username: "Albar Khan", date: "23-02-24", amount: [786000] },
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
  return (
    <form className="form">
      <div>
        <input className="name" placeholder="Name"></input>
        <input type="date" className="name" placeholder="Name"></input>
        <input type="number" className="name" placeholder="Amount "></input>
      </div>
    </form>
  );
}

function DateBar() {
  return (
    <div className="date-bar">
      <div className="select-options">
        <select>
          <option>Year</option>
        </select>
        <select>
          <option>month</option>
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
    <table className="table">
      <thead>
        <tr>
          <th className="date-column">Date</th>
          <th className="name-column">Name</th>
          <th className="amount-column">Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.username}>
            <td>{data.date}</td>
            <td>Albar Khan</td>
            <td>₹{data.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
