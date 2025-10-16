import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <ProfileHeader />
      <div className="home-content">
        <h1>Welcome to EaglerHub 🦅</h1>
        <p>The ultimate modern hub for all things Eaglercraft!</p>

        <div className="hub-buttons">
          <button onClick={() => navigate("/servers")}>🌐 EaglerServers</button>
          <button onClick={() => navigate("/play")}>🎮 EaglerLauncher</button>
          <button onClick={() => navigate("/forums")}>💬 EaglerForums</button>
        </div>
      </div>
    </div>
  );
}
