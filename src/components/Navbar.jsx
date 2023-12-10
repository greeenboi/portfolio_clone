import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-auto mt-4 mb-6 flex flex-row justify-between items-center text-black'>
        <div className='flex flex-row justify-start items-center'>Your Name</div>
        <ul className='flex flex-row justify-end items-center list-none'>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar