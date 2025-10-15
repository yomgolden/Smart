import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from Smart Node.js + TypeScript app!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
