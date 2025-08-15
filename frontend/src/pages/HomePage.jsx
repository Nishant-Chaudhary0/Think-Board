import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const res = api.get("/notes").then(
        res => {
         console.log("res.data", res.data);
         setNotes(res.data)
        }
      )
      
    } catch (error) {
      console.log("error fetching notes", error)
      toast.error(" error getting notes")
    }finally{
      setLoading(false)
    }
  },[])
  return (
   <div>
     <Navbar/>
     <div>
      {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}
      {
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            notes.map((note) => (
              <NoteCard key={note._id} note ={note} setNotes={setNotes}/>
            ))
          }
        </div>
      }
     </div>
   </div>
    
  )
}

export default HomePage;
