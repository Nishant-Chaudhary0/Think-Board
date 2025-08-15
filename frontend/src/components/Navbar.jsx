import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-gray-950'>
       <div className='flex justify-between p-4'>
         <div className='text-2xl font-bold text-green-700 font-mono'>ThinkBoard</div>
       <Link to={"/create"}>
        <button className='btn btn-primary bg-green-700 text-black font-mono'><PlusIcon className='size-5'/> New Note</button>
       </Link>
       </div>
      
    </div>
  )
}

export default Navbar
