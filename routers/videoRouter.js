import express from "express";

const videoRouter = express.Router();

videoRouter.get("/upload", (req, res) => res.send("Upload a video"));

export default videoRouter;
