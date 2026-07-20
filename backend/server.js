import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import Note from "./model/noteModel.js";

dotenv.config();


const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());


app.post("/api/notes", async (req, res) => {
  const note = req.body;

  if (!note.title || !note.description) {
    return res.status(400).json({success: false, message: "Please provide all the required fields"})
  }

  const newNote =  new Note(note)

  try {
    const savedproduct = await newNote.save()
    res.status(201).json({success: true, message: "New Note created successfully", data: savedproduct})
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({success: false, message:"Server error"});
  }


})





connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is ready and running.");
})
})

// Mzmry9YkgAFGqWjN