const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { userController } = require("../controllers");

const accountRouter = Router();

accountRouter.post("/sign-in", userController.signIn);
accountRouter.post("/sign-out", authMiddleware, userController.signOut);

module.exports = {
  accountRouter: accountRouter,
};
