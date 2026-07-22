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

  },
  deleteNotes: async (nid) => {
    const res = await fetch("http://localhost:5000/api/notes/6a5df2cad4a36e874588d8c5", {
      method: "DELETE"
    })
    const data = await res.json();
    set((state) => ({notes: state.notes.filter((note) => {
      return (
        note._id !== nid
      )
    })}));
    return({success: true, message: "Note delete successfully." })
  },
  fetchNotes: async () => {
    const res = await fetch("http://localhost:5000/api/notes", {
      method: "GET"
    });
    const data = await res.json();
    set({notes: data.data})
    return({success: true, message: "All products successfully fetched"})
  }

}))