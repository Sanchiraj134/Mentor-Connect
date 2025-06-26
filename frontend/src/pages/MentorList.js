import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MentorList.css";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/mentors")
      .then((res) => {
        setMentors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch mentors.");
        setLoading(false);
      });
  }, []);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.skills?.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="mentor-container">
      <h2 className="mentor-title">Mentor List</h2>

      <input
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mentor-search"
      />

      {loading && <p className="mentor-loading">Loading mentors...</p>}
      {error && <p className="mentor-error">{error}</p>}

      <div className="mentor-grid">
        {filteredMentors.map((mentor) => (
          <div key={mentor._id} className="mentor-card">
            <h3>{mentor.name}</h3>
            <p><strong>Skills:</strong> {mentor.skills?.join(", ")}</p>
            <p><em>{mentor.bio}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
