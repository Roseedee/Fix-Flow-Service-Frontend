import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "../App";
import SignIn from "../features/auth/LoginPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
