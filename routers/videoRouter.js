import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, (req, res) => res.send("Upload a video"));

export default videoRouter;
