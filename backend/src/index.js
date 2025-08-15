import express from 'express'
import router from './routes/notesRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const __dirname = path.resolve()

app.use(express.json())
if (process.env.NODE_ENV !== "production") {
    app.use(cors(
        {
            origin: "http://localhost:5173",
        }
    ))
}

app.use("/api/notes", router)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
})

}


const port = 3001;

connectDB().then(() => {
    app.listen(port, (req, res) => {
        console.log("Server is running on port", port);
    })
}
)

