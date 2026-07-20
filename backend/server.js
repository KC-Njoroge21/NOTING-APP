import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import Note from "./model/noteModel.js";

dotenv.config();


const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());


app.get("/api/notes", async (req, res) => {
  try {
    const allNotes = await Note.find({});
    res.status(200).json({success: true, message: "Notes retreived successfully", data: allNotes})
  } catch (error) {
    console.error("Error getting notes:", error.message)
    res,status.json({success: false, message: "Server error."})
  }
})


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

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Note successfully deleted."})
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({success: false, message: "Server error."})
  }

})

app.put("/api/notes/:id", async (req, res) => {
  const note = req.body;
  const { id } = req.params;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, {new: true});
    res.status(201).json({success: true, message:"Note successfully updated.", data: updatedNote})
  } catch (error) {
    console.error("Error creating note:", error.message)
    res.status(500).json({success: false, message: "Server error."});
  }
})





connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is ready and running.");
})
})

// Mzmry9YkgAFGqWjN