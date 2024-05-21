import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.post("/add-user", homeController.addUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  return app.use("/", router);
};
export default initWebRoute;
