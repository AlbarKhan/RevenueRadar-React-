import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
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
            // style={{ width: "80px", borderRadius: "20px" }}
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
