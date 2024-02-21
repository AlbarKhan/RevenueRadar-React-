import { months } from "./App";
export function DateBar({
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
      <div className="total-amount">
        <span className="status">
          {selectYear} : {sumyear}
        </span>
        <span className="status">
          {selectMonth} : ${summonth}
        </span>
      </div>
    </div>
  );
}
