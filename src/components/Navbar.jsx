import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='w-full h-auto mt-4 mb-6 flex flex-row justify-between items-center text-black font-afacad'>
        <Link to="Home" className='mx-2 hover:cursor-pointer' smooth={true}>
            <div className='flex flex-row justify-start items-center'>Your Name</div>
        </Link>
        
        <ul className='flex flex-row justify-end items-center list-none'>
            <li><Link to="Home" className='mx-4 hover:cursor-pointer' smooth={true}>Home</Link></li>
            <li><Link to="Projects" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Projects</Link></li>
            <li><Link to="Contact" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Contact</Link></li>
        </ul>
    </nav> 
  )
}

export default Navbar