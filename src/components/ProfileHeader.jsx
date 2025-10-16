import React from "react";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  const user = JSON.parse(localStorage.getItem("user")) || { email: "Guest" };

  return (
    <div className="profile-header">
      <img
        src="https://api.dicebear.com/7.x/bottts/svg?seed=user"
        alt="avatar"
        className="avatar"
      />
      <div>
        <h3>{user.email}</h3>
        <p>Welcome back!</p>
      </div>
    </div>
  );
}
