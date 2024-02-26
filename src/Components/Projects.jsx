import React from 'react'
import { projects } from '../data'
import { Link } from 'react-router-dom'

const Projects = () => {

  return (
    <div className='w-full h-[450px] bg-black p-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects?.map((item)=>{
            return(
                <Link to={item?.path} className='bg-slate-800 hover:bg-slate-400 text-white font-bold py-5 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded-xl text-center text-xl'>
                    <span className='text-white'>{item?.name}</span>
                </Link>
            )
        })}
    </div>
    </div>
  )
}

export default Projects