import React from "react";
import { Route, Routes, NavLink } from "reactnpm install react-router-dom localforage match-sorter sort-by-dom";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Team from "./Team";

export default function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" href="#">
        Пингвины
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <NavLink className="nav-link" to="/">
        О нас
      </NavLink>

      <NavLink className="nav-link" to="/contacts">
        Контакты
      </NavLink>

      <NavLink className="nav-link" to="/team">
        Наша команда
      </NavLink>

      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </nav>
   </div >
  )
  }
