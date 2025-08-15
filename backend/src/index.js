import express from 'express'
import router from './routes/notesRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()


app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173",
    }
))

app.use("/api/notes",router)

const port = 3001;

connectDB().then(() => {
    app.listen(port , (req, res) => {
    console.log("Server is running on port",port);
})
}
)

