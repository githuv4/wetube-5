// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListen = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.get("/", (req, res) => res.send("Home"));

app.listen(PORT, handleListen);
