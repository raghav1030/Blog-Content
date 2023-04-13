import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <div className='text-3xl font-semibold text-center pt-[5px]  top-0 h-min w-full border-b-2 shadow-md pb-2 fixed bg-white '>
        <NavLink to='/'>
        <h1>StudyNode Blogs</h1>

        </NavLink>
    </div>
  )
}
