import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Calculator from "./components/Calculator";

const title = "Calculator";

const App = () => {
  return (
    <div>
      <nav className="app-header layout-row align-items-center justify-content-center">
        <div className="layout-row align-items-center">
          <img alt="" src={logo} className="logo" />
          <h4 id="app-title" data-testid="app-title" className="app-title">
            {title}
          </h4>
        </div>
      </nav>
      <Calculator />
    </div>
  );
};

export default App;
