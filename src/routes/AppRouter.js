import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../component/AddExpensePage";
import ExitExpensePage from "../component/ExitExpensePage";
import ExpenseDasboardPage from "../component/ExpenseDasboardPage";
import Header from "../component/Header";
import HelpPage from "../component/HelpPage";
import NotfoundPage from "../component/NotfoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDasboardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit" element={<ExitExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
