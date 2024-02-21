import { useState } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { ConversionButtons } from "./ConversionButtons";
export const months = [
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

export const data = [
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
      <Header setType={setType}>
        <Logo />
        <ConversionButtons setType={setType} />
      </Header>
      <Body type={type} setType={setType} />
    </div>
  );
}
