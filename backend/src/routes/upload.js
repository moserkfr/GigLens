const express = require("express");
const multer = require("multer");
const { parseCSV } = require("../utils/csvParser");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try 
  {
    const filePath = req.file.path;
    const jsonData = await parseCSV(filePath);
    res.json({ success: true, data: jsonData });
  } 
  catch (err) 
  {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;