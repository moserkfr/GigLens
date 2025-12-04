// backend/src/routes/appeal.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../data/appeals.json");

// Helper: ensure file exists
function ensureFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf8");
  }
}

function readAll() {
  ensureFile();
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
function writeAll(arr) {
  fs.writeFileSync(filePath, JSON.stringify(arr, null, 2), "utf8");
}

// Create appeal
router.post("/", (req, res) => {
  try {
    const body = req.body || {};
    const appeals = readAll();

    const newAppeal = {
      id: Date.now().toString(),
      issue_id: body.issue_id || null,
      issue: body.issue || null,
      user: body.user || null,
      message: body.message || "",
      attachments: body.attachments || [],
      status: "pending", // pending|reviewing|resolved|rejected
      admin_notes: "",
      submitted_at: new Date().toISOString(),
    };

    appeals.push(newAppeal);
    writeAll(appeals);

    res.json({ success: true, appeal: newAppeal });
  } catch (err) {
    console.error("appeal POST error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// List appeals
router.get("/", (req, res) => {
  try {
    const appeals = readAll();
    res.json({ success: true, appeals });
  } catch (err) {
    console.error("appeal GET error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update appeal by id
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body || {};
    const appeals = readAll();
    const idx = appeals.findIndex((a) => a.id === id);
    if (idx === -1) return res.status(404).json({ success: false, error: "Appeal not found" });

    appeals[idx] = { ...appeals[idx], ...updates, updated_at: new Date().toISOString() };
    writeAll(appeals);
    res.json({ success: true, appeal: appeals[idx] });
  } catch (err) {
    console.error("appeal PUT error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
