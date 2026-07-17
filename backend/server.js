import express from "express"

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there. Welcome to my server.")
})

app.listen("5000", () => {
  console.log("Server is ready and running.");
})

// Mzmry9YkgAFGqWjN