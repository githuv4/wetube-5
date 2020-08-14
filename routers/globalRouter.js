import express from "express";
import routes from "../routes";
import { home, login, join } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.join, join);

export default globalRouter;
