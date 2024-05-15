import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
const initWebRoute = (app) => {
  // app.METHOD(PATH, HANDLER);
  router.get("/", homeController.getHomePage);
  return app.use("/", router);
};
export default initWebRoute;
