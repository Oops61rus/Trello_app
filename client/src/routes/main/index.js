import React from "react";
import MainBody from "./body";
import MainHeader from "./header";
import "./styles.css";

const Main = () => {
  return (
    <div className="main__page">
      <MainHeader />
      <MainBody />
    </div>
  );
};

export default Main;
