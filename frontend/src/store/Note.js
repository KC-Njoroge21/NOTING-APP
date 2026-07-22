import { create } from "zustand"

export const useNoteStore = create((set) => ({
  notes: [],
  setNotes: (notes) => ({notes}),
  createNotes: async (newNote) => {
    if (!newNote.title || !newNote.description) {
      return {success: false, message: "Please provide all required fields."}
    }

    const res = await fetch("http://localhost:5000/api/notes");
    const data = await res.json();
    setNotes((state) => ({notes:[...state.notes, data.data]}))
    toast.success("Note Created Successfully.")
    return({success: true, message: "Note created successfully"})

  }

}))