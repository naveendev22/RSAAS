import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/index.js";
import Signup from "./pages/signup/index.js";
export default function Pages() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route index element={<Login />}></Route>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="*" element={<Login />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}
