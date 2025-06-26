import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "mentee",
    skills: "",
    interests: "",
    bio: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
        interests: form.interests.split(",").map((i) => i.trim()),
      };
      const res = await axios.post("http://localhost:5000/api/auth/register", payload);
      setMsg("Registration successful!");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMsg("Registration failed: " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account 📝</h2>
        <p>Sign up to get started</p>

        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />

          <select name="role" value={form.role} onChange={handleChange}>
            <option value="mentee">Mentee</option>
            <option value="mentor">Mentor</option>
          </select>

          <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (for mentors)" />
          <input name="interests" value={form.interests} onChange={handleChange} placeholder="Interests (for mentees)" />
          <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio"></textarea>

          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>

        <p className="msg">{msg}</p>
      </div>
    </div>
  );
};

export default Register;
