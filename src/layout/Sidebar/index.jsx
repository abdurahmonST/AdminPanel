import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className='fixed flex flex-col p-5 gap-2 text-xl bg-slate-800 w-90 h-screen'>
      <NavLink className='hover:bg-cyan-500 transition-all p-1 rounded text-amber-50' to='/'>Home</NavLink>
      <NavLink className='hover:bg-cyan-500 transition-all p-1 rounded text-amber-50' to='/about'>About</NavLink>
      <NavLink className='hover:bg-cyan-500 transition-all p-1 rounded text-amber-50' to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Sidebar
