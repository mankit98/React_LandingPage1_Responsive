import React from "react";
import Nav from "./Components/Nav";
import Leftdiv from "./Components/Leftdiv";
import Rightdiv from "./Components/Rightdiv";
import "../public/stylesheets/style.css";

const App = () => {
  return (
    <>
      <div className="main">
        < Nav/>
        <div className="content">
          <Leftdiv />
          <Rightdiv />
        </div>
      </div>
    </>
  );
};

export default App;
