const express = require("express");
const router = express.Router();
const generatePdf = require("../controller/generatePdf");

// Home Page
router.get("/", (_, res) => {
  res.sendFile("index.html");
});

// Download PDF Route
router.get("/generate-pdf", async (req, res) => {
  let result = await generatePdf(req.query.url);
  res.attachment(`node-express-puppeteer-pdf-example.pdf`);
  res.contentType("application/pdf");
  res.send(result);
});

// Catch All
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
