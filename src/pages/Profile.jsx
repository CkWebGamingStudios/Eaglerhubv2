import React from "react";
import ProfileHeader from "../components/ProfileHeader";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };

  return (
    <div className="page">
      <ProfileHeader />
      <h1>👤 Profile</h1>
      <p>Welcome back, {user.name}!</p>
    </div>
  );
}
