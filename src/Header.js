import { useState } from "react";
export function Header({ children }) {
  const [responsive, setResponsive] = useState(false);
  return (
    <header className="header">
      <nav>
        {children}
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
