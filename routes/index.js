const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const generatePdf = require("../controller/generatePdf");

// Home Page
router.get("/", (_, res) => {
  res.sendFile("index.html");
});

// Download PDF Route
router.get("/generate-pdf", async (req, res) => {
  let result = await generatePdf('url', req.query.url);
  res.attachment(`node-express-puppeteer-pdf-example.pdf`);
  res.contentType("application/pdf");
  res.send(result);
});

router.post("/generate-pdf", async (req, res) => {
  let result = await generatePdf('base64', req.body.content);
  let filename = crypto.randomBytes(16).toString("hex").toUpperCase();
  if (req.body.filename) {
    let validated_file_name = req.body.filename.trim().replace(/[^a-zA-Z0-9_-]/gim,'');
    filename = validated_file_name;
  }
  res.attachment(`${filename}.pdf`);
  res.contentType("application/pdf");
  res.send(result);
})


// Catch All
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
