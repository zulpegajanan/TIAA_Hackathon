import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { LoginSignUp } from "./Pages/LoginSignup/Index";
import { Loader } from "./components/Loader";
import { Details } from "./Pages/Details/Details";

const App = () => {
  const login = useSelector((state) => state.login);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
      <Loader />
    </>
  );
};

export default App;
