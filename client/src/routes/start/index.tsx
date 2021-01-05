import React from "react";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StartPageBody from "routes/start/body";
import StartPageHeader from "routes/start/header";
import { RootState } from 'types';
import "./styles.css";

const StartPage: React.FC = () => {
  const isAuthenticated: any = useSelector<RootState>(
    (state: RootState) => state.authReducer.isAuthenticated
  )

  if (isAuthenticated) {
    return (
      <Redirect to='/boards' />
    )
  }
  return (
    <div className="start__page">
      <StartPageHeader />
      <StartPageBody />
    </div>
  );
};

export default StartPage;