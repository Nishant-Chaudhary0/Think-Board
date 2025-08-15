import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, Navigate, useNavigate } from 'react-router'
import api from '../lib/axios'


const CreatedPage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
      e.preventDefault();
      
      if(!title.trim() || !content.trim()){
        toast.error("All fields are required")
        return;
      }
setLoading(true)

      try {
        await axios.post("http://localhost:3001/api/notes", {
          title,
          content
        });
       toast.success("Note created successfully")
       navigate("/")

      } catch (error) {
          toast.error("error while creating note")
          
      }finally{
         setLoading(false)
      }
  }
  return (
    <div className='min-h-screen bg-base-200'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto'>
            <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5'/>
            back to Notes
            </Link>

            <div className='card bg-base-100'> 
              <div className='card-body'>
                <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
                <form onSubmit={handleSubmit}>
                  <div className='flex gap-7'>
                    <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" placeholder='Note title' className='input input-bordered p-4 w-full' value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>

                 
                  <div className="form-control mb-4 mt-2 flex gap-2 ">
                     <label className='label'>
                    <span>Content</span>
                  </label>
                  <textarea type="text" placeholder='Write Something' className='input input-bodered h-20 p-4 w-full' value={content} onChange={(e) => setContent(e.target.value)} />
                  </div>
<div className='card-actions justify-end'>
  <button type='submit' className='btn btn-primary' disabled={loading}>
    {loading?"Creating...":"Create Note"}
  </button>
</div>
                </form>

              </div>
            </div>
          </div>
          </div>      
    </div>
  )
}

export default CreatedPage
