import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const dummyUser = {
    name: "Sanchi",
    role: "Mentee",
    email: "sanchi@example.com",
    appointments: [
      { mentorName: "Priya Sharma", time: "5:00 PM Today" }
    ],
    messages: [
      { content: "Welcome to Mentor Connect", read: false }
    ],
    sessionsCompleted: 3
  };

  return (
    <div className="dashboard-container">
      <h2>Hello, {dummyUser.name}! 👋</h2>
      <p>Role: {dummyUser.role} | Email: {dummyUser.email}</p>

      <div className="dashboard-grid">
        <div className="card">
          <h3>My Appointments</h3>
          <p>Mentor: {dummyUser.appointments[0].mentorName}</p>
          <p>Time: {dummyUser.appointments[0].time}</p>
        </div>

        <div className="card">
          <h3>Messages</h3>
          <p>{dummyUser.messages.length} unread message(s)</p>
        </div>

        <div className="card">
          <h3>Profile Overview</h3>
          <p>Name: {dummyUser.name}</p>
          <p>Role: {dummyUser.role}</p>
        </div>

        <div className="card">
          <h3>Progress Tracker</h3>
          <p>Sessions completed: {dummyUser.sessionsCompleted}/5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
