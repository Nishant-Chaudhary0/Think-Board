import express from 'express';
import { getNoteById, getnotes, postNotes } from '../controllers/notesController.js';
import { editNotes } from '../controllers/notesController.js';
import { deleteNotes } from '../controllers/notesController.js';
const router = express.Router();

router.get("/", getnotes)

router.get("/:id",getNoteById)

router.post("/", postNotes)

router.put("/:id", editNotes)

router.delete("/:id",deleteNotes)

export default router;
