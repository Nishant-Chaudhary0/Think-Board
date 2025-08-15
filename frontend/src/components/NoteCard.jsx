import { PenIcon, PenToolIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({note, setNotes}) => {
    const handleDelete = async(e,id) => {
            e.preventDefault();
            if(!window.confirm("Are you sure you want to delete this note?")) return;

            try {
                await api.delete(`/notes/${id}`)
                setNotes((prev) => prev.filter((n) => n._id !== id));
                toast.success("Note deleted successfully")
            } catch (error) {
                toast.error("Error deleting Note")
            }
    }
  return (
    <Link to={`/notes/${note._id}`} className='card bg-gray-950 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] mt-4 m-4 '>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='flex justify-between'>
                <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>{formatDate(note.createdAt)}</span>
            </div>
            <div className='flex item-center gap-1 mt-3'>
                <PenIcon className='size-4 mt-1.5' />
                <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}>
                    <Trash2Icon className='size-4' />
                </button>
            </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard