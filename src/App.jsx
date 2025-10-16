import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Servers from "./pages/Servers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

export default function App() {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <div className="app-container">
        {user && <Sidebar />}
        <div className="page-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
            <Route path="/play" element={user ? <Play /> : <Navigate to="/signup" />} />
            <Route path="/servers" element={user ? <Servers /> : <Navigate to="/signup" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/signup" />} />
            <Route path="/settings" element={user ? <Settings /> : <Navigate to="/signup" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
