import Note from "../models/note.js"

export const getnotes = async(req, res) => {
     try {
        const notes = await Note.find().sort({
            createdAt:-1
        });
        res.status(200).json(notes)
     } catch (error) {
        console.log("Error in getNotes",error)
        res.status(500).json({
            message:"Internal server error"
        })
     }
}

export const getNoteById = async(req,res) => {
    try {
        const noteId = await Note.findById(req.params.id)
        res.status(200).json(noteId)
    } catch (error) {
        console.log("Error in getNotesById",error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const postNotes = async(req, res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({
            title,
            content
        })
        await newNote.save()
        res.status(201).json({
            message:"Note created successfully"
        })
        } catch (error) {
        console.log("error in postNotes",error)
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export const editNotes = async(req, res) => {
    try {
        const {title, content} = req.body;
        const editRoute = await Note.findByIdAndUpdate(req.params.id,{title, content})
        if(!editRoute) return res.status(404).json({
            message:"note not found"
        })
        res.status(201).json({
            message:"note updated"
        })
    } catch (error) {
        console.log("error in postNotes",error)
        res.status(500).json({
            message:"internal server error"
        })
    }
}



export const deleteNotes = async(req, res) => {
   try {
    await Note.findByIdAndDelete(req.params.id)
    res.status(201).json({
        message:"note deleted"
    })
   } catch (error) {
    console.log("error in deleteNotes",error)
    res.status(500).json({
        message:"internal server error"
    })
   }
}