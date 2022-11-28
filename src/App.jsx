import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {!isLoggedIn ? <Login /> : <Container />}
    </>
  );
};

export default App;
