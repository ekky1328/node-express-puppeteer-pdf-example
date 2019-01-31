const express = require("express");
const router = express.Router();
const saveToPdf = require("../controller/safeToPdf");

// Home Page
router.get("/", (_, res, __) => {
  res.send(
    `This is a printable PDF document, here is some good info about designing for print: <a href="https://www.smashingmagazine.com/2015/01/designing-for-print-with-css">Click Here</a>! 
    <p>
    <a href="/generate-pdf?url=http://localhost:3000">Click here to print this page!`
  );
});

// Download PDF Route
router.get("/generate-pdf", async (req, res, __) => {
  let result = await saveToPdf(req.query.url);
  res.attachment(`node-express-puppeteer-pdf-example.pdf`);
  res.contentType("application/pdf");
  res.send(result);
});

module.exports = router;
