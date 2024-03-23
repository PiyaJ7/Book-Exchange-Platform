import React from "react";
import "./dashboard.css";
import Header from "../Components/Header";

export default function Dashboard() {
  return (
    <div className="dashboard-Section">
      <Header />
      <div className="dashboard-page h-full">
        <p>This is the dashboard</p>
      </div>
    </div>
  );
}
