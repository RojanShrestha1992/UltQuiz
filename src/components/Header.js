import React from "react";
import Logo from "./logo.png";
function Header() {
  return (
    <header className="app-header">
      <img src={Logo} alt="logo" className="quiz-logo" />
      <h1 className="title">The Ult Quiz</h1>
    </header>
  );
}
export default Header;
