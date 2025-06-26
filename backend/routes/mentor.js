import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Get all mentors
router.get("/", async (req, res) => {
  try {
    const mentors = await User.find({ role: "mentor" }).select("-password");
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// AI-powered matching stub (simple keyword match)
router.post("/match", async (req, res) => {
  const { interests } = req.body;
  try {
    const mentors = await User.find({ role: "mentor" });
    const scored = mentors.map(mentor => {
      const matchCount = mentor.skills.filter(skill => interests.includes(skill)).length;
      return { mentor, score: matchCount };
    });
    scored.sort((a, b) => b.score - a.score);
    res.json(scored.map(s => s.mentor));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;