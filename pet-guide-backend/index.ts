import express from "express";
import dotenv from "dotenv";
import authentication from "./controllers/AuthenticationController";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(authentication);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
