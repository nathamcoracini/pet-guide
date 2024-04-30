import express from "express";
import {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  login,
  logout,
} from "../services/AuthenticationService";

const app = express();

app
  .post("/user", createUser)
  .delete("/user", deleteUser)
  .patch("/user", updateUser)
  .get("/user", getUser)
  .post("/login", login)
  .get("/logout", logout);

export default app;
