import React from "react";

const Header: React.FC = () => (
  <header
    style={{
      width: "100%",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2rem 3rem 0 3rem",
      boxSizing: "border-box",
    }}
  >
    {/* Logo à gauche */}
    <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px" }}>
      KD
    </div>
    {/* Navigation à droite */}
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px" }}>HOME</li>
        <li style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px" }}>PROJET</li>
        <li style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px" }}>CONTACT</li>
      </ul>
    </nav>
  </header>
  );

export default Header;