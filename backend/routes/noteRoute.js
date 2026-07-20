import express from "express";
import Note from "../model/noteModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allNotes = await Note.find({});
    res
      .status(200)
      .json({
        success: true,
        message: "Notes retreived successfully",
        data: allNotes,
      });
  } catch (error) {
    console.error("Error getting notes:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

router.post("/", async (req, res) => {
  const note = req.body;

  if (!note.title || !note.description) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Please provide all the required fields",
      });
  }

  const newNote = new Note(note);

  try {
    const savedproduct = await newNote.save();
    res
      .status(201)
      .json({
        success: true,
        message: "New Note created successfully",
        data: savedproduct,
      });
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Note successfully deleted." });
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

router.put("/:id", async (req, res) => {
  const note = req.body;
  const { id } = req.params;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
    res
      .status(201)
      .json({
        success: true,
        message: "Note successfully updated.",
        data: updatedNote,
      });
  } catch (error) {
    console.error("Error creating note:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

export default router;
