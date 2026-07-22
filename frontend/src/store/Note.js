import { create } from "zustand"

export const useNoteStore = create((set) => ({
  notes: [],
  setNotes: (notes) => ({notes}),
  createNotes: async (newNote) => {
    if (!newNote.title || !newNote.description) {
      return {success: false, message: "Please provide all required fields."}
    }

    const res = await fetch("")

  }

}))