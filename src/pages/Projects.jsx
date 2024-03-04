import React from 'react'
import {projects} from '../constants/index'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className="max-container bg-white ">
    <h1 className="head-text">
    My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>

    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-500">
    <p>The projects are made using stack - Javascript/Typescript with React Js/Next Js for frontend and Django in the backend, with the implemention of Convex/Firebase/Primsa/Neon/Uploadthing for real-time database functionality and Clerk/Kinde for user-authentication.</p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
    {projects.map((project) => (
      <div className='lg:w-[400px] w-full ' key={project.name}>
      <div className='block-container w-12 h-12'>
      <div className={`btn-back rounded-xl ${project.theme}`} />

      <div className='btn-front rounded-xl flex justify-center items-center'>
      <img 
      src={project.iconUrl}
      alt='Project Icon'
      className='w-1/2 h-1/2 object-contain'
      />
      </div>
      </div>


      <div className='mt-5 flex flex-col'>
      <h4 className='text-xl font-semi-poppins font-semibold'>{project.name}</h4>
      <p className='mt-2 text-slate-500'> {project.description} </p>

      <div className='mt-5 flex items-center gap-8 font-poppins'>
      <Link
      to={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-blue-500"
      >
      Github
      </Link>

      <div>

      <Link
      to={project.weblink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-blue-500"
      >
      Visit Website here
      </Link>

      </div>

      </div>
      </div>


      </div>

    ))}
    </div>

    <hr className='border-slate-200'/>

    <CTA />
    </section>
  )
}

export default Projects
