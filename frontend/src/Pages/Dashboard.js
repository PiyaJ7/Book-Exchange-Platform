import React from "react";
import "./dashboard.css";
import Header from "../Components/Header";
import ProfileBar from "../Components/ProfileBar";

export default function Dashboard() {
  return (
    <div className="dashboard-Section">
      <Header />
      <ProfileBar />
      <div className="dashboard-page h-full">
        <p>This is the dashboard</p>
      </div>
    </div>
  );
}
