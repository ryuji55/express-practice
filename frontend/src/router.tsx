import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "./components/Top";
import Users from "./components/users/Users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />}></Route>
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
