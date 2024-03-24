import React from "react";
import "./dashboard.css";
import Header from "../Components/Header";
import ProfileBar from "../Components/ProfileBar";
import NavigationBar from "../Components/NavigationBar";

export default function Dashboard() {
  return (
    <div className="dashboard-Section">
      <Header />
      <ProfileBar />
      <NavigationBar />
      <div className="dashboard-page h-full">
        <p>This is the dashboard</p>
      </div>
    </div>
  );
}
