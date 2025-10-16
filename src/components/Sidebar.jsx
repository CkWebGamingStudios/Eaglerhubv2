import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EaglerHub</h2>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/play">🎮 Play</Link>
        <Link to="/servers">🌐 Servers</Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/settings">⚙️ Settings</Link>
      </nav>
    </div>
  );
}
