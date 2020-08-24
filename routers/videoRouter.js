import express from "express";
import routes from "../routes";
import { upload, ediitVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, ediitVideo);

export default videoRouter;
