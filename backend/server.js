import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import Note from "./model/noteModel.js";
import router from "./routes/noteRoute.js";
import cors from "cors";

dotenv.config();


const PORT = process.env.PORT || 5000



const app = express();

app.use(cors({origin: "http://localhost:5173"}))

app.use(express.json());




app.use("/api/notes", router)



connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is ready and running.");
})
})

// Mzmry9YkgAFGqWjN