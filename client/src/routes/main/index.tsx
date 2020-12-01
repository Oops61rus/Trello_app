import React from "react";
import MainBody from "routes/main/body";
import MainHeader from "routes/main/header";
import "./styles.css";

const Main: React.FC = () => {
  return (
    <div className="main__page">
      <MainHeader />
      <MainBody />
    </div>
  );
};

export default Main;
