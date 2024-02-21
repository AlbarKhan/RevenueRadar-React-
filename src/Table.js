export function Table({ selectYear, selectMonth, copyData, type }) {
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
