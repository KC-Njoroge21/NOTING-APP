import { create } from "zustand"

export const useNoteStore = create((set) => ({
  notes: [],
  setNotes: (notes) => ({notes}),
  createNotes: async (newNote) => {
    if (!newNote.title || !newNote.description) {
      return {success: false, message: "Please provide all required fields."}
    }

    const res = await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newNote)
    });
    const data = await res.json();
    set((state) => ({notes:[...state.notes, data.data]}))

    return({success: true, message: "Note created successfully"})

  }

}))