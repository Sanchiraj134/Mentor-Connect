import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MentorList from "./pages/MentorList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <h1>Hello</h1>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentors" element={<MentorList />} />
      </Routes>
    </Router>
  );
}

export default App;