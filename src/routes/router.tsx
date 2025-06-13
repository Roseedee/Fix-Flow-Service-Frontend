import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "../App";
import Auth from "@features/auth/Auth";
import Dashboard from "@features/Dashboard";
import Search from "@features/Search"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
