import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there. Welcome to my server.")
})

connectDB().then(() => {
  app.listen("5000", () => {
  console.log("Server is ready and running.");
})
})

// Mzmry9YkgAFGqWjN