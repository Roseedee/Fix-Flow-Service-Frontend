import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//page general
import IndexPage from "../App";
import Auth from "@features/auth/Auth";
import Dashboard from "@features/Dashboard";
import Search from "@features/Search";

//page task
import AddTask from "@features/task/AddTask";
import AllTask from "@features/task/AllTask";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/addtask" element={<AddTask />}/>
        <Route path="/task/alltask" element={<AllTask />} />
      </Routes>
    </BrowserRouter>
  );
}
