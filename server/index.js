//--exerciseBackEndOne--Ryan Smith--2/25/2024-----------------------------
const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// endpoints
app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});
app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
});

// listener
app.listen(4000, () => console.log("Server running on prot 4000"));
