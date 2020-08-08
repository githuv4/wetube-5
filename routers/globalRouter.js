import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Home"));
globalRouter.get("/login", (req, res) => res.send("Login"));

export default globalRouter;
